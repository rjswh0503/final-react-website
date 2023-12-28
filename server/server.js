const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const PORT = 5003;

// 들어오는 url은 허용을 안해준 상태, get으로 가져가는 주소만 허용해준 것
// Get과 Post로 DB에 전달받을 url 주소도 허용할 수 있도록 넣어줘야함
app.use(cors({origin: 'http://localhost:3000'}))
// app.use(cors());
app.use(express.json());

const dbconfig = {
    user: 'khbank',
    password: '1234',
    connectString: 'localhost:1521/XE',
};

async function selectQuery(sql){
    let connection;

    try{
        // db와 연결하기
        connection = await oracledb.getConnection(dbconfig);
        const result = await connection.execute(sql)

        return result.rows.map((row) => ({
            ID: row[0],
            NAME: row[1],
            PRICE: row[2],
        }));
    } catch (err){
        console.error(err);
    } finally {
        if(connection){
            try{
                await connection.close();
            } catch(err){
                console.error(err);
            }
            
        }
    }
}

app.listen(PORT, () => {
    console.log(`서버 시작: http://localhost:${PORT}`);
})

app.get('/api/cafe', async(request, response) => {
    const cafe = await selectQuery('SELECT * FROM CAFE');
    response.json(cafe);
});

// post로 전달받을 쿼리 작성해주기 
app.post('/api/cafe', async (request, response) => {
    const { NAME, PRICE } = request.body;
    console.log('새로운 데이터가 추가되었습니다.', { NAME, PRICE });

    let connection;
    try {
        connection = await oracledb.getConnection(dbconfig);

        const result = await connection.execute(
            'INSERT INTO CAFE(ID, NAME, PRICE) VALUES (CAFE_SEQ.NEXTVAL, :name, :price)',
            { name: NAME, price: PRICE },
            { autoCommit: true }
        );

        const cafes = await selectQuery('SELECT * FROM CAFE');
        response.json(cafes);
    } catch (error) {
        console.error('Error in POST /api/cafe: ', error);
        response.status(500).json({ error: 'POST에서 에러났습니다.', error });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error('커넥션 닫기 에러: ', error);
            }
        }
    }
});