import React from 'react'
import { Button, Table, UncontrolledTooltip } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Navhieu from "../../components/Navbars/NavHieu"
import TableHieu from "../../components/TableHieu/index"
import {getNews} from "../../components/apis/index"
import { useEffect, useState } from "react";
import ModalHieu from "../../components/ModalHieu/index"
import CardHieu from "../../components/CardHieu/CardHieu.js"


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
      
      <ModalHieu>
        
      </ModalHieu>
      <CardHieu/>
   
    </>
  );
}
