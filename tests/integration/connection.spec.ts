import { PgPromiseConnectionAdapter } from "@/infra/database";

describe("Connection", () => {
  test("Should create a connection with database", async () => {
    const connection = PgPromiseConnectionAdapter.getInstance();
    const itemsData = await connection.query("SELECT * FROM items", []);

    expect(itemsData).toBeTruthy();
  });
});
