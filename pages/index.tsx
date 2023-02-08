import DonateButton from '@/components/donate';
import { useEffect, useState } from 'react';
import { fetchAllData } from './api/blizzardAPI';
import BasicModal from '../components/modal/Modal';
import { Button } from '@mui/material';
import Fade from '@mui/material/Fade';


interface Props {
  data: Data;
}

interface Data {
  [endpoint: string]: any;
}

const Home = ({ data }: Props) => {


  useEffect(() => {
    if (!data) return

    const arr: any = Object.values(data.Roster)

    console.log('DATA', data)
  }, [data]);




  return (
    <>

    </>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchAllData();
  return { props: { data } };
}

export default Home;

