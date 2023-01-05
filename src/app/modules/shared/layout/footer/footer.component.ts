import { Component, OnInit } from '@angular/core';
import { VersionService } from '~/app/services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version?: string = '1.0.0';

  constructor(private versionService: VersionService) { }

  ngOnInit(): void {
    this.version = this.versionService.getVersion();
  }



}
