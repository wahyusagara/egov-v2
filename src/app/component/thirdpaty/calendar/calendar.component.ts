import { Component, OnInit } from '@angular/core';
// import { CalendarComponentOptions } from 'ion2-calendar'
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  collapseAnimation
} from 'angular-calendar';
import { GlobalFuncService } from 'src/app/services/global-func.service';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

const colors: any = {
  red: {
    primary: '#f00',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  activeDayIsOpen = false;
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.handleEvent('Edited', event);
        alert('Edited');
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        // this.handleEvent('Deleted', event);
        alert('Deleted');
      }
    }
  ];

  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  currentView;
  constructor(
    private global: GlobalFuncService,
    private api: ApiService
  ) {
    this.currentView = this.CalendarView.Month;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.global.showToast('Tanggal ' + date + ' Clicked', 'primary')
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  getDataCalendars() {
    const NIPBARU = JSON.parse(localStorage.getItem('nipbaru'));
    return this.api.getData('https://sdm.big.go.id/siap/service/index.php/pegawai/logbook?NIPBARU='+NIPBARU).then((result) => {
      const resp = JSON.parse(JSON.stringify(result));
      var eventCalendars: CalendarEvent[] = [];
      if (resp.length > 0) {
        resp.forEach((val,idx) => {
          if (eventCalendars.findIndex(x => x.id == val.KODESKP) == -1) {
            eventCalendars.push({
              start: new Date(val.TANGGAL.substring(0,9)),
              // end: addDays(new Date(val.TANGGAL.substring(0,9)), parseInt(val.LAMA_PENGERJAAN)),
              title: val.URAIAN_AKTIVITAS ? val.URAIAN_AKTIVITAS : "",
              allDay: true,
              draggable: false,
              resizable: {
                afterEnd: false,
                beforeStart: false
              },
              id: val.KODESKP,
              actions: this.actions,
              color: colors.red
            })
          }
        });
      }
      return this.events = eventCalendars;
    }).catch((err) => {
      console.error(err);
    })
  }

  async ngOnInit() {
    await this.getDataCalendars();
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  setView(view: CalendarView) {
    this.view = view;
    this.currentView = view;
  }

}
