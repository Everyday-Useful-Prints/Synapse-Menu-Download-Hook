/// <reference types="node" />
import * as net from 'net';
import * as os from 'os';

function updatePresence(): void {
    const CLIENT_ID = "1519690969434554559"; 
    let hasInitialized = false;

    const pipePath = os.platform() === 'win32' 
        ? '\\\\.\\pipe\\discord-ipc-0' 
        : `${process.env.XDG_RUNTIME_DIR || process.env.TMPDIR || process.env.TMP || '/tmp'}/discord-ipc-0`;

    console.log('[RPC] Attempting to hook local Discord Desktop client socket...');

    const socket = net.createConnection(pipePath, () => {
        console.log('[RPC] Connected to IPC pipe. Initializing Handshake framework...');
        const handshakePayload = { v: 1, client_id: CLIENT_ID };
        sendPacket(socket, 0, handshakePayload);
    });

    socket.on('data', (data: Buffer) => {
        if (data.length < 8) return; 

        const op = data.readInt32LE(0);
        const length = data.readInt32LE(4);
        
        if (hasInitialized) return;

        if (op === 1 && data.length >= 8 + length) {
            const responseText = data.toString('utf8', 8, 8 + length);
            
            if (responseText.includes("READY")) {
                console.log('[RPC] Handshake verified. Injecting your custom parameters...');
                
                const activityPayload = {
                    cmd: 'SET_ACTIVITY',
                    args: {
                        pid: process.pid,
                        activity: {
                            details: "Using Synapse Menu", // Required text field line 1
                            state: "Modding Ac With Synapse Menu", // Text field line 2
                            timestamps: {
                                start: Math.floor(Date.now() / 1000)
                            },
                            // IMPORTANT: If this string doesn't match an asset in your Developer portal, 
                            // comment out the entire assets object below to test text-only.
                            assets: {
                                large_image: "chatgpt_image_jun_24_2026_07_14_51_pm",
                                large_text: "Synapse Menu On Top",
                                small_text: "Join the server :)"
                            },
                            buttons: [
                                {
                                    label: "Join Discord",
                                    url: "https://discord.gg"
                                }
                            ]
                        }
                    },
                    nonce: Math.random().toString()
                };
                
                sendPacket(socket, 1, activityPayload);
                hasInitialized = true;
                console.log('🌌 [RPC] Success! Synapse Menu layout is now live on your profile.');
            }
        }
    });

    socket.on('error', (err: any) => {
        console.error('[RPC] ❌ Connection failed. Ensure your local Discord desktop app is running:', err.message);
    });
}

function sendPacket(socket: net.Socket, op: number, payload: any): void {
    const json = JSON.stringify(payload);
    const dataBuffer = Buffer.from(json, 'utf8');
    const packet = Buffer.alloc(8 + dataBuffer.length);

    packet.writeInt32LE(op, 0);                 
    packet.writeInt32LE(dataBuffer.length, 4);   
    dataBuffer.copy(packet, 8);                 

    socket.write(packet);
}

updatePresence();