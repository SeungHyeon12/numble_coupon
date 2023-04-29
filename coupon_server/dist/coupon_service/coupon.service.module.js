"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponServiceModule = void 0;
const common_1 = require("@nestjs/common");
const coupon_issue_domain_service_1 = require("./domain/coupon.issurance/service/coupon.issue.domain.service");
const register_coupon_service_1 = require("./application/service/register.coupon.service");
const update_coupon_service_1 = require("./application/service/update.coupon.service");
const use_coupon_service_1 = require("./application/service/use.coupon.service");
const mysql_module_1 = require("../providers/database/mysql.module");
const coupon_repository_implement_1 = require("./adapter/out/persistence/coupon/repository/coupon.repository.implement");
const coupon_store_adpater_1 = require("./adapter/out/persistence/coupon/adapter/coupon.store.adpater");
const coupon_reader_adapter_1 = require("./adapter/out/persistence/coupon/adapter/coupon.reader.adapter");
const issurance_repository_implement_1 = require("./adapter/out/persistence/issurance/repository/issurance.repository.implement");
const coupon_issurance_store_adapter_1 = require("./adapter/out/persistence/issurance/adapter/coupon.issurance.store.adapter");
const coupon_issurance_reader_adapter_1 = require("./adapter/out/persistence/issurance/adapter/coupon.issurance.reader.adapter");
const coupon_controller_1 = require("./adapter/in/controller/http/coupon.controller");
const coupon_service_dto_mapper_1 = require("./adapter/in/controller/http/dto/coupon.service.dto.mapper");
const issue_coupon_service_1 = require("./application/service/issue.coupon.service");
const cancle_coupon_service_1 = require("./application/service/cancle.coupon.service");
const get_coupons_service_1 = require("./application/service/get.coupons.service");
const event_mapper_1 = require("./adapter/in/event.handler/event.mapper");
const issurance_coupon_event_handler_1 = require("./adapter/in/event.handler/issurance.coupon.event.handler");
const queue_issurance_service_1 = require("./application/service/queue.issurance.service");
const redis_queue_manager_1 = require("./adapter/out/queue/redis.queue.manager");
const bull_1 = require("@nestjs/bull");
const bull_mq_provider_1 = require("../providers/queue/bull.mq.provider");
const coupon_grpc_controller_1 = require("./adapter/in/controller/grpc/coupon.grpc.controller");
const dto_mapper_1 = require("./adapter/in/controller/grpc/dto/dto.mapper");
let CouponServiceModule = class CouponServiceModule {
};
CouponServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [mysql_module_1.MysqlModule, bull_1.BullModule.registerQueue(Object.assign({}, bull_mq_provider_1.bullMqProvider))],
        controllers: [coupon_controller_1.CouponController, coupon_grpc_controller_1.CouponGrpcController],
        providers: [
            coupon_issue_domain_service_1.IssueCouponDomainService,
            coupon_service_dto_mapper_1.CouponServiceDtoMapper,
            event_mapper_1.EventMapper,
            issurance_coupon_event_handler_1.IssuranceCouponEventHandler,
            dto_mapper_1.GrpcDtoMapper,
            {
                provide: 'ISSUE_COUPON_USECASE',
                useClass: issue_coupon_service_1.IssueCouponService,
            },
            {
                provide: 'REGISTER_COUPON_USECASE',
                useClass: register_coupon_service_1.RegsiterCouponService,
            },
            {
                provide: 'UPDATE_COUPON_USECASE',
                useClass: update_coupon_service_1.UpdateCouponService,
            },
            {
                provide: 'USE_COUPON_USECASE',
                useClass: use_coupon_service_1.UseCouponService,
            },
            {
                provide: 'CANCLE_COUPON_USECASE',
                useClass: cancle_coupon_service_1.CancleCouponService,
            },
            {
                provide: 'GET_COUPONS_USECASE',
                useClass: get_coupons_service_1.GetCouponsService,
            },
            {
                provide: 'QUEUE_ISSURANCE_USECASE',
                useClass: queue_issurance_service_1.QueueIssuranceService,
            },
            {
                provide: 'COUPON_REPOSITORY',
                useClass: coupon_repository_implement_1.CouponRepository,
            },
            {
                provide: 'COUPON_ISSURANCE_REPOSITORY',
                useClass: issurance_repository_implement_1.IssuranceRepository,
            },
            {
                provide: 'COUPON_STORE_OUTPORT',
                useClass: coupon_store_adpater_1.CouponStoreAdapter,
            },
            {
                provide: 'COUPON_READER_OUTPORT',
                useClass: coupon_reader_adapter_1.CouponReaderAdapter,
            },
            {
                provide: 'ISSURANCE_STORE_OUTPORT',
                useClass: coupon_issurance_store_adapter_1.IssuranceStoreAdapter,
            },
            {
                provide: 'ISSURANCE_READER_OUTPORT',
                useClass: coupon_issurance_reader_adapter_1.IssuranceReaderAdapter,
            },
            {
                provide: 'QUEUE_MANAGER_OUTPORT',
                useClass: redis_queue_manager_1.RedisQueueManager,
            },
        ],
    })
], CouponServiceModule);
exports.CouponServiceModule = CouponServiceModule;
//# sourceMappingURL=coupon.service.module.js.map