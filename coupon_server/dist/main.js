"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const typeorm_transactional_1 = require("typeorm-transactional");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            url: 'localhost:5000',
            package: 'coupon',
            protoPath: (0, path_1.join)(__dirname, 'coupon.proto'),
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    (0, typeorm_transactional_1.initializeTransactionalContext)();
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map