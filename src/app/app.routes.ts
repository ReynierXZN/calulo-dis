import { Routes } from '@angular/router';
import { IncidentReportComponent } from './incident-report/incident-report';
import { ReliefDistribution } from './relief-distribution/relief-distribution';
import { EvacuationCenter } from './evacuation-center/evacuation-center';

export const routes: Routes = [

 { path: '', redirectTo: 'IncidentReportComponent', pathMatch: 'full' },
 { path: 'IncidentReportComponent', component: IncidentReportComponent },
 { path: 'ReliefDistribution', component: ReliefDistribution },
 { path: 'EvacuationCenter', component: EvacuationCenter}

];

