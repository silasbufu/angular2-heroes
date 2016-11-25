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
var techs_component_1 = require('./techs.component');
var TechComponent = (function () {
    function TechComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', techs_component_1.Tech)
    ], TechComponent.prototype, "tech", void 0);
    TechComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fountain-tech',
            templateUrl: './tech.component.html',
            styleUrls: ['tech.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TechComponent);
    return TechComponent;
}());
exports.TechComponent = TechComponent;
//# sourceMappingURL=tech.component.js.map