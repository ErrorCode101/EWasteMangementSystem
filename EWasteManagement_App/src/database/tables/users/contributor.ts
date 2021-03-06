import { BaseModel } from "../base.model";

export class EWasteContributor extends BaseModel {
    _id: string;
    LoginName: string;
    FirstName: string;
    LastName: string;
    Email: string;
    MobileNo: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    Password: string;
}