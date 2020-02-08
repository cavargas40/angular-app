import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { SecondAssignmentComponent } from './components/second-assignment/second-assignment.component';
import { ThirdAssignmentComponent } from './components/third-assignment/third-assignment.component';
import { FourthAssignmentComponent } from './components/fourth-assignment/fourth-assignment.component';
import { GameControlComponent } from './components/fourth-assignment/game-control/game-control.component';
import { OddComponent } from './components/fourth-assignment/odd/odd.component';
import { EvenComponent } from './components/fourth-assignment/even/even.component';
import { DirectivesDeepDiveComponent } from './components/directives-deep-dive/directives-deep-dive.component';
import { BasicHighlighDirective } from './directives/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    SecondAssignmentComponent,
    ThirdAssignmentComponent,
    FourthAssignmentComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesDeepDiveComponent,
    BasicHighlighDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
