import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentPipe'
})
export class MomentPipe implements PipeTransform {
    transform(value: Date|moment.Moment): any {
    	moment.locale('sv');
        return moment(value).fromNow();
    }
}