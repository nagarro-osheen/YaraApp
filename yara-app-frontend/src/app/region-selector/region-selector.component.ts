import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CountriesService } from "../countries.service";
import { Address } from "../models/address.model";

@Component({
    selector: 'app-region-selector',
    templateUrl: './region-selector.component.html'
})
export class RegionSelectorComponent {

    countryInfo: any[] = [];
    stateInfo: any[] = [];
    cityInfo: any[] = [];
    isComponentReady: Boolean = false;

    @Input() address: Address;

    @Output() valid: EventEmitter<Boolean> = new EventEmitter();
    @Output() outputAddress: EventEmitter<Address> = new EventEmitter();

    constructor(private countries: CountriesService) { }

    ngOnInit() {
        this.getCountries();
    }

    getCountries() {
        this.countries.allCountries().subscribe(
            data => {
                console.log(data);
                this.countryInfo = data;
                this.initComponent();
            }, err => console.log(err),
            () => console.log('complete')
        )
    }
    initComponent(): void {
        if (this.address && this.address.country) {
            this.onCountryChange(this.address.country);
            this.onChangeState(this.address.state);
        } else {
            this.address = Address.init();
        }
        this.isComponentReady = true;
    }

    onCountryChange(countryValue) {
        if(this.isComponentReady) {
            this.cityInfo = undefined;
            this.stateInfo = undefined;
            this.address.state=undefined;
            this.address.city=undefined;
        }
        for (var i = 0; i <= this.countryInfo.length; i++) {
            var country = this.countryInfo[i];
            if (country.name == countryValue) {
                this.stateInfo = this.countryInfo[i].states;
                break;
            }
        }
      
        this.checkIfInputsValid();
    }

    onChangeState(stateValue) {
        if(this.isComponentReady) {
            this.cityInfo = undefined;
            this.address.city=undefined;
        }
        let states = Object.entries(this.stateInfo);
        for (var i = 0; i <= states.length; i++) {
            var state = states[i];
            if (stateValue === state[0]) {
                this.cityInfo = state[1];
                break;
            }
        }
        this.checkIfInputsValid();
    }

    onChangeCity() {
        this.checkIfInputsValid();
    }

    checkIfInputsValid() {
        this.valid.emit(this.areInputsValid());
        if(this.areInputsValid()) {
            this.outputAddress.emit(this.address);
        }
    }

    areInputsValid(): Boolean {
        return this.address.country !== undefined && this.address.state !== undefined && this.address.city !== undefined;
    }

}