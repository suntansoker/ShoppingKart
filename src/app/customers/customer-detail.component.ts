import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit { 
    id: any;

    constructor(private route: ActivatedRoute, private location: Location){
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
    }

    goBack(): void {
        this.location.back();
    }
}
