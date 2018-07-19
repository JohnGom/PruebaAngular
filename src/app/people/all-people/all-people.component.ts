import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ManagePersonService } from '../service/manage-person.service';
import { Person } from '../Person';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'gender', 'city', 'address', 'phone' ];
  dataSource: MatTableDataSource<Person>;

  constructor(private personService: ManagePersonService,
    private router: Router,
    public dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  openDialogForAddress(person: Person): void {
    this.dialog.open(ContactModalComponent, {
      data: { person: person, typeContact: 'address' }
    });
  }

  openDialogForPhone(person: Person): void {
    this.dialog.open(ContactModalComponent, {
      data: { person: person, typeContact: 'phone' }
    });
  }

  ngOnInit() {
    this.personService.getPeople().subscribe(info => {
      this.dataSource = new MatTableDataSource<Person>(info);
    })
    this.dataSource.paginator = this.paginator;
  }

  routerPageNewPerson() {
    this.router.navigate(['/newPerson']);
  }

}
