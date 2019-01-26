﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.8.0 (NJsonSchema v9.13.9.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IRoomClient {
    getAll(): Observable<RoomsListViewModel | null>;
    get(id: number): Observable<RoomDetailsViewModel | null>;
    create(command: CreateRoomCommand): Observable<number>;
    update(id: number, command: UpdateRoomCommand): Observable<RoomDto | null>;
    delete(id: number): Observable<void>;
}

@Injectable()
export class RoomClient implements IRoomClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getAll(): Observable<RoomsListViewModel | null> {
        let url_ = this.baseUrl + "/api/Room/GetAll";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<RoomsListViewModel | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<RoomsListViewModel | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<RoomsListViewModel | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RoomsListViewModel.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RoomsListViewModel | null>(<any>null);
    }

    get(id: number): Observable<RoomDetailsViewModel | null> {
        let url_ = this.baseUrl + "/api/Room/Get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<RoomDetailsViewModel | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<RoomDetailsViewModel | null>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<RoomDetailsViewModel | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RoomDetailsViewModel.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RoomDetailsViewModel | null>(<any>null);
    }

    create(command: CreateRoomCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/Room/Create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    update(id: number, command: UpdateRoomCommand): Observable<RoomDto | null> {
        let url_ = this.baseUrl + "/api/Room/Update/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<RoomDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<RoomDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processUpdate(response: HttpResponseBase): Observable<RoomDto | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RoomDto.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RoomDto | null>(<any>null);
    }

    delete(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Room/Delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }
}

export class RoomsListViewModel implements IRoomsListViewModel {
    rooms?: RoomDto[] | undefined;
    createEnabled?: boolean;

    constructor(data?: IRoomsListViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["rooms"] && data["rooms"].constructor === Array) {
                this.rooms = [];
                for (let item of data["rooms"])
                    this.rooms.push(RoomDto.fromJS(item));
            }
            this.createEnabled = data["createEnabled"];
        }
    }

    static fromJS(data: any): RoomsListViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new RoomsListViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.rooms && this.rooms.constructor === Array) {
            data["rooms"] = [];
            for (let item of this.rooms)
                data["rooms"].push(item.toJSON());
        }
        data["createEnabled"] = this.createEnabled;
        return data; 
    }
}

export interface IRoomsListViewModel {
    rooms?: RoomDto[] | undefined;
    createEnabled?: boolean;
}

export class RoomDto implements IRoomDto {
    roomID?: number;
    roomNumber?: number;
    renterName?: string | undefined;
    calendar?: Calendar | undefined;

    constructor(data?: IRoomDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.roomID = data["roomID"];
            this.roomNumber = data["roomNumber"];
            this.renterName = data["renterName"];
            this.calendar = data["calendar"] ? Calendar.fromJS(data["calendar"]) : <any>undefined;
        }
    }

    static fromJS(data: any): RoomDto {
        data = typeof data === 'object' ? data : {};
        let result = new RoomDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["roomID"] = this.roomID;
        data["roomNumber"] = this.roomNumber;
        data["renterName"] = this.renterName;
        data["calendar"] = this.calendar ? this.calendar.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IRoomDto {
    roomID?: number;
    roomNumber?: number;
    renterName?: string | undefined;
    calendar?: Calendar | undefined;
}

export class Calendar implements ICalendar {
    bookedTime?: Date;
    sinceTime?: Date;
    untilTime?: Date;

    constructor(data?: ICalendar) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.bookedTime = data["bookedTime"] ? new Date(data["bookedTime"].toString()) : <any>undefined;
            this.sinceTime = data["sinceTime"] ? new Date(data["sinceTime"].toString()) : <any>undefined;
            this.untilTime = data["untilTime"] ? new Date(data["untilTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Calendar {
        data = typeof data === 'object' ? data : {};
        let result = new Calendar();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["bookedTime"] = this.bookedTime ? this.bookedTime.toISOString() : <any>undefined;
        data["sinceTime"] = this.sinceTime ? this.sinceTime.toISOString() : <any>undefined;
        data["untilTime"] = this.untilTime ? this.untilTime.toISOString() : <any>undefined;
        return data; 
    }
}

export interface ICalendar {
    bookedTime?: Date;
    sinceTime?: Date;
    untilTime?: Date;
}

export class RoomDetailsViewModel implements IRoomDetailsViewModel {

    constructor(data?: IRoomDetailsViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
    }

    static fromJS(data: any): RoomDetailsViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new RoomDetailsViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data; 
    }
}

export interface IRoomDetailsViewModel {
}

export class CreateRoomCommand implements ICreateRoomCommand {
    roomID?: number;
    roomNumber?: number;
    renterName?: string | undefined;

    constructor(data?: ICreateRoomCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.roomID = data["roomID"];
            this.roomNumber = data["roomNumber"];
            this.renterName = data["renterName"];
        }
    }

    static fromJS(data: any): CreateRoomCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateRoomCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["roomID"] = this.roomID;
        data["roomNumber"] = this.roomNumber;
        data["renterName"] = this.renterName;
        return data; 
    }
}

export interface ICreateRoomCommand {
    roomID?: number;
    roomNumber?: number;
    renterName?: string | undefined;
}

export class UpdateRoomCommand implements IUpdateRoomCommand {
    roomID?: number;
    roomNumber?: number;
    renterName?: string | undefined;

    constructor(data?: IUpdateRoomCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.roomID = data["roomID"];
            this.roomNumber = data["roomNumber"];
            this.renterName = data["renterName"];
        }
    }

    static fromJS(data: any): UpdateRoomCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateRoomCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["roomID"] = this.roomID;
        data["roomNumber"] = this.roomNumber;
        data["renterName"] = this.renterName;
        return data; 
    }
}

export interface IUpdateRoomCommand {
    roomID?: number;
    roomNumber?: number;
    renterName?: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}