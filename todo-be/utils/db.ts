import { createPool, Pool, RowDataPacket, OkPacket, ResultSetHeader, FieldPacket } from 'mysql2/promise';
import { config } from '../config';

let pool: Pool;

(async () => {
  pool = await createPool({
    ...config.db,
  });
})();

const castQueryResult = <T>(queryResult: [RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader, FieldPacket[]]): T[] => {
  return (queryResult as [any, FieldPacket[]] as [T[], FieldPacket[]])[0];
};

export { pool, castQueryResult };