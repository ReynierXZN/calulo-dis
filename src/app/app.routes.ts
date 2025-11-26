import { Routes } from '@angular/router';
import { IncidentReportComponent } from './incident-report/incident-report';
import { ReliefDistributionComponent } from './relief-distribution/relief-distribution';
import { EvacuationCenterComponent } from './evacuation-center/evacuation-center';

export const routes: Routes = [

 { path: '', redirectTo: 'IncidentReportComponent', pathMatch: 'full' },
 { path: 'IncidentReportComponent', component: IncidentReportComponent },
 { path: 'ReliefDistributionComponent', component: ReliefDistributionComponent },
 { path: 'EvacuationCenterComponent', component: EvacuationCenterComponent}

];

