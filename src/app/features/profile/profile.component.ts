import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../shared/services/toaster.service';
import { LoadingService } from '../../shared/services/loading.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private toaster: ToasterService,private loader: LoadingService) { }

  ngOnInit() {
  }

  updateProfile() {
    debugger;
    this.loader.show();
    this.toaster.showToasterComponent("Updating your profile. Please wait...", '', 1000, 'loading');
    this.toaster.showToasterComponent("Updated successfully.", '', 1000, 'success');
  }
}
