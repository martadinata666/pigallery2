import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-timestamp-timepicker',
  templateUrl: './timepicker.component.html',
})
export class TimeStampTimePickerComponent {

  timestampValue = 0;
  @Output() timestampChange = new EventEmitter<number>();

  date: Date = new Date();

  @Input() name: string;

  @Input()
  public get timestamp() {
    return this.timestampValue;
  }

  public set timestamp(val: number) {
    this.date.setTime(val);
    if (this.timestampValue === val) {
      return;
    }
    this.timestampValue = val;
    this.timestampChange.emit(this.timestampValue);
  }

  onChange(date: Date | string) {
    this.timestamp = (new Date(date)).getTime();
  }


}



