import { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, ScreenShare } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const VideoCallPage = () => {
    const [isCallActive, setIsCallActive] = useState(false);
    const [micOn, setMicOn] = useState(true);
    const [cameraOn, setCameraOn] = useState(true);

    return (
        <div className="space-y-6">
            {/* Video Area */}
            <Card className="relative h-[420px] bg-slate-900 overflow-hidden">
                {isCallActive ? (
                    <>
                        {/* Remote video (mock) */}
                        <div className="absolute inset-0 flex items-center justify-center text-white text-lg">
                            Remote Video Stream
                        </div>

                        {/* Local video (mock) */}
                        <div className="absolute bottom-4 right-4 h-32 w-44 rounded-lg bg-slate-700 flex items-center justify-center text-xs text-white">
                            Your Video
                        </div>
                    </>
                ) : (
                    <div className="flex h-full items-center justify-center text-slate-400">
                        Call not started
                    </div>
                )}
            </Card>

            {/* Controls */}
            <Card>
                <div className="flex items-center justify-center gap-3">
                    <Button
                        variant={micOn ? 'secondary' : 'error'}
                        onClick={() => setMicOn(!micOn)}
                    >
                        {micOn ? <Mic size={18} /> : <MicOff size={18} />}
                    </Button>

                    <Button
                        variant={cameraOn ? 'secondary' : 'error'}
                        onClick={() => setCameraOn(!cameraOn)}
                    >
                        {cameraOn ? <Video size={18} /> : <VideoOff size={18} />}
                    </Button>

                    <Button variant="outline">
                        <ScreenShare size={18} />
                    </Button>

                    {isCallActive ? (
                        <Button
                            variant="error"
                            onClick={() => setIsCallActive(false)}
                        >
                            <PhoneOff size={18} />
                        </Button>
                    ) : (
                        <Button
                            variant="success"
                            onClick={() => setIsCallActive(true)}
                        >
                            Start Call
                        </Button>
                    )}
                </div>
            </Card>
        </div>
    );
};
