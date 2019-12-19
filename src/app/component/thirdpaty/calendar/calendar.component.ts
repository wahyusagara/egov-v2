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
  // dateku = "2019-11-17";
  // type: 'string';
  // optionsMulti: CalendarComponentOptions = {
  //   pickMode: 'multi',
  //   // from: new Date(new Date().toISOString()).setDate(1),
  //   from: new Date(1),
  //   weekStart: 1,
  //   color: "danger"
  // };
  // dateMulti : string[] = [
  //   "2019-11-15",
  //   "2019-11-17",
  //   "2019-11-19"
  // ];

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

  events: CalendarEvent[] = [
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue,
    //   allDay: true
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: addHours(new Date(), 2),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }
  ];
  refresh: Subject<any> = new Subject();

  a = [
    {
      a: "1"
    },
    {
      a: "2"
    },
    {
      a: "3"
    }
  ];
  constructor(
    private global: GlobalFuncService,
    private api: ApiService
  ) {
    
    console.log(this.a);
    console.log(this.a.findIndex(x => x.a == '1'));
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
    return this.api.getData('https://sdm.big.go.id/siap/service/index.php/pegawai/logbook').then((result) => {
      console.log(result);
      const resp = JSON.parse(JSON.stringify(result));
      const start = new Date(resp[0].TANGGAL.substring(0,8));
      const end = addDays(new Date(resp[0].TANGGAL.substring(0,8)), parseInt(resp[0].LAMA_PENGERJAAN));
      console.log(start, end);
      // this.events = [];
      var eventCalendars: CalendarEvent[] = [];
      resp.forEach((val,idx) => {
        let warna;
        if (val.KATEGORI === '1') {
          warna = colors.yellow;
        } else if(val.KATEGORI === '2') {
          warna = colors.red;
        } else {
          warna = colors.blue;
        };
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
            color: warna
          })
        }
      });
      return this.events = eventCalendars;
      console.log(this.events);
    }).catch((err) => {
      console.error(err);
    })
  }

  async ngOnInit() {
    await this.getDataCalendars();
  }

}
