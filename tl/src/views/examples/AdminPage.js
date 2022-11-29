import React from 'react'
import { Button, Table, UncontrolledTooltip } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Navhieu from "../../components/Navbars/NavHieu"
import TableHieu from "../../components/TableHieu/index"
import {getNews} from "../../components/apis/index"
import { useEffect, useState } from "react";



export default function AdminPage() {

  const [news, setNews] = useState([]);

  useEffect(() => {   
    getNews().then((res)=>{
      // const {data} = res
      console.log("layNews",res)
      setNews(res.data)
      
    }) 
  }, []);


  return (
    <>
      <Navhieu></Navhieu>
      <Button color="info">Add News</Button>
      <TableHieu news={news}></TableHieu>
   
    </>
  );
}
