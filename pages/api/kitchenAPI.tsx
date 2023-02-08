import cron from 'node-cron';
require('dotenv').config()

let data: any;

cron.schedule('*/5 * * * *', async () => {
    data = await fetchAllData();
});


export async function getServerSideProps() {
  return { props: { data } };
}


interface Data {
    [endpoint: string]: any;
}


export async function fetchAllData() {
try {

} catch (err) {
    console.error(err);
    throw err;
}
}
