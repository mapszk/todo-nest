import {MigrationInterface, QueryRunner} from "typeorm";

export class notes1654645429126 implements MigrationInterface {
    name = 'notes1654645429126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "color" character varying, "description" character varying, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "note"`);
    }

}
