using Microsoft.EntityFrameworkCore.Migrations;

namespace _411Project.Web.Migrations
{
    public partial class updateFKTable_SaveCode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SaveCode_AspNetUsers_UserId",
                table: "SaveCode");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "SaveCode",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SaveCode_AspNetUsers_UserId",
                table: "SaveCode",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SaveCode_AspNetUsers_UserId",
                table: "SaveCode");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "SaveCode",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_SaveCode_AspNetUsers_UserId",
                table: "SaveCode",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
