import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { MeetingRequests } from './MeetingRequests';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

interface MeetingEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
}

export const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<MeetingEvent[]>([
    {
      id: '1',
      title: 'Investor Meeting',
      start: '2026-01-10T10:00:00',
      end: '2026-01-10T11:00:00',
    },
    {
      id: '2',
      title: 'Startup Pitch',
      start: '2026-01-12T14:00:00',
      end: '2026-01-12T15:00:00',
    },
  ]);

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt('Enter meeting title');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      setEvents((prev) => [...prev, newEvent]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Meeting Calendar</h2>
            <Button size="sm" variant="outline">
              My Availability
            </Button>
          </div>
        </CardHeader>

        <CardBody>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            selectable
            selectMirror
            select={handleDateSelect}
            events={events}
            height="auto"
          />
        </CardBody>
      </Card>

      {/* Meeting Requests */}
      <MeetingRequests />
    </div>
  );
};
