import React,{useEffect,useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';


import ApiRoutes from '../utils/ApiRoutes';
import AxiosService from '../utils/AxiosService';
function Member_Dashboard() {
  const navigate = useNavigate();
 
  const [searchitem,setSearchitem]=useState([]);
  const [member, setMember] = useState([])
  
  const fetchData = async()=>
    {
      try {
        const res = await AxiosService.get(
          `${ApiRoutes.GET_MEMBER.path}`,{authenticate: ApiRoutes.GET_MEMBER.authenticate})
          setSearchitem(res.data.users)
          setMember(res.data.users);
          
      } catch (error) {
        console.log(error)
      }
    }
    const itemsPerPage = 4; // Number of cards per page


  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(member.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = member.slice(startIndex, startIndex + itemsPerPage);

    
useEffect(()=>{
   
  fetchData();
    },[])
  

  return (
    <Container className='membercontainer'>
    <div className="option">
      <h1 id="members" className='fs-1'><strong><b>Our Valuevable Members</b></strong></h1>
      <p>Discover the benefits of membership.</p>
      <p>Total Members:<Button><strong><h1>{member.length} +</h1></strong></Button></p>
      {/* <Button variant="success" onClick={Navigate("/add_member")} >Join Now</Button> */}
    </div>
    <div className=''>
    <Row xs={1} md={2} lg={2}  className="g-4">
           
    
    {
        selectedData.map((e,i)=>{
          return <Col >
           {/* <Image className='text-center'  style={{ maxHeight: '100px' }} src={`../src/assets/${e.name}.jpg`} rounded /> */}
           <Card className="border-2 rounded"  style={{maxHeight:"auto",maxWidth:"600px"}}>
            {/* <Card.Img variant="bottom"  src={`../src/assets/${e.name}.jpg`}/> */}
          
            <Card.Body className='member_body'>
              <Card.Title className='text-uppercase link-light'>{e.name} </Card.Title>
              <Card.Text className='text-capitalize p-3'>
                {/* <Row>
                  <Col> */}
                  <div>
                  <Image className='text-center rounded-circle'  style={{ maxHeight: '200px' }} src={`../src/assets/members/${e.name}.jpg`} rounded />
                  </div>
              <div className='d-flex flex-column '>
              <div className='d-flex gap-3'>
               <div><b>Organisation  : </b></div><div>  {e.organisation}</div>
               </div>
               <div className='d-flex gap-3'>
               <div><b >Dealing  :   </b></div><div>{e.dealing}</div>
               </div>
               <div className='d-flex gap-2'>
               <div><b >Address:  </b></div><div> {e.address} </div>
               </div>
               <div className='d-flex gap-3'>
                <div><b >Mobile   : </b></div><div> {e.mobile}</div>
                </div>
               <div className='d-flex gap-3'>
                <div><b >Email: </b></div><div>{e.email} </div>
                
                </div>
               <div className='d-flex gap-3'>
                <div><b >Web   : </b></div><div> {e.web}</div>
                </div>
                </div>
                {/* </Col>
               
                </Row> */}
               {/* <h6 className=''>Organisation :{e.organisation}</h6>
               <h6>Dealing :{e.dealing}</h6>
               <h6><i class="fa-solid fa-address-card"></i>{e.address}</h6>
               <h6>Mobile :{e.mobile}</h6>
               <h6>Email :{e.email}</h6>
               <h6>Web :{e.web}</h6> */}

              </Card.Text>
            </Card.Body>
           
          </Card>
          </Col>
         
           })
          }
          
   
</Row>
</div>
      <div className="pagination p-4">
        <Button className="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <div className="page-number"><span>{currentPage} / {totalPages}</span></div>
        <Button className="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
      {/* <div class="pagination">
  <a href="#" class="prev">&laquo; Previous</a>
  <a href="#" class="page-number">1</a>
  <a href="#" class="page-number">2</a>
  <a href="#" class="page-number">3</a>
  <a  class="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next &raquo;</a>
</div> */}

  </Container>
  )
}

export default Member_Dashboard