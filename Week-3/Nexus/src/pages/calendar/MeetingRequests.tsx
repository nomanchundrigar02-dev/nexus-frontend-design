import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

type MeetingStatus = 'pending' | 'accepted' | 'declined';

interface Meeting {
    id: number;
    title: string;
    time: string;
    status: MeetingStatus;
}

export const MeetingRequests = () => {
    const [meetings, setMeetings] = useState<Meeting[]>([
        {
            id: 1,
            title: 'Investor Discussion',
            time: 'Jan 10, 2026 • 10:00 AM',
            status: 'pending',
        },
        {
            id: 2,
            title: 'Startup Pitch',
            time: 'Jan 12, 2026 • 02:00 PM',
            status: 'pending',
        },
    ]);

    const updateStatus = (id: number, status: MeetingStatus) => {
        setMeetings((prev) =>
            prev.map((m) => (m.id === id ? { ...m, status } : m))
        );
    };

    return (
        <Card>
            <CardHeader>
                <h2 className="text-lg font-semibold">Meeting Requests</h2>
            </CardHeader>

            <CardBody className="space-y-4">
                {meetings.map((meeting) => (
                    <div
                        key={meeting.id}
                        className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
                    >
                        <div>
                            <p className="font-medium">{meeting.title}</p>
                            <p className="text-sm text-slate-500">{meeting.time}</p>
                        </div>

                        {meeting.status === 'pending' ? (
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="success"
                                    onClick={() => updateStatus(meeting.id, 'accepted')}
                                >
                                    Accept
                                </Button>
                                <Button
                                    size="sm"
                                    variant="error"
                                    onClick={() => updateStatus(meeting.id, 'declined')}
                                >
                                    Decline
                                </Button>
                            </div>
                        ) : (
                            <span
                                className={`text-sm font-medium ${meeting.status === 'accepted'
                                        ? 'text-success-600'
                                        : 'text-error-600'
                                    }`}
                            >
                                {meeting.status === 'accepted' ? 'Accepted' : 'Declined'}
                            </span>
                        )}
                    </div>
                ))}
            </CardBody>
        </Card>
    );
};
