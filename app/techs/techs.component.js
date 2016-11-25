"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Tech = (function () {
    function Tech(logo, title, text1, text2) {
        this.logo = logo;
        this.title = title;
        this.text1 = text1;
        this.text2 = text2;
    }
    return Tech;
}());
exports.Tech = Tech;
var TechsComponent = (function () {
    function TechsComponent(http) {
        var _this = this;
        this.http = http;
        this.getTechs().subscribe(function (result) { return _this.techs = result; });
    }
    TechsComponent.prototype.getTechs = function () {
        return this.http
            .get('app/techs/techs.json')
            .map(function (response) { return response.json(); });
    };
    TechsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fountain-techs',
            templateUrl: './techs.component.html',
            styleUrls: ['techs.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TechsComponent);
    return TechsComponent;
}());
exports.TechsComponent = TechsComponent;
//# sourceMappingURL=techs.component.js.map