import styles from './LeaderSection.module.css';
import {useState} from 'react';
import ReactPaginate from "react-paginate";

const LeaderSection = ({leaders}) => {
//   return (
//     <div className={styles['leader-section']}>
//         <table className={styles['leader-table']}>
//             <tr>
//             <th>S No.</th>
//             <th>Name</th>
//             <th><img src='/static/images/dumpling.png'/></th>
//             </tr>
//             {leaders.map((leader, idx) => {
//             return (
//                 <tr key={`${leader._id}_${idx}`}>
//                 <td>{idx + 1}</td>
//                 <td>{leader?.toUser?.name}</td>
//                 <td>{leader?.points}</td>
//                 </tr>
//             )
//             })}
//         </table>
//         {/* <ul>
//             {
//             leaders.map((leader, idx) => (
//                 <li key={`${leader._id}_${idx}`}>
//                 <span>{idx+1}</span> <span>{leader?.toUser?.name}</span> <span>{leader?.points}</span>
//                 </li>
//             ))
//             }
//         </ul> */}
//     </div>
//   )

const [users, setUsers] = useState(leaders.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, idx) => {
      return (
        <tr key={`${user._id}_${idx}`}>
            <td>{idx + pagesVisited + 1}</td>
            <td>{user?.toUser?.name}</td>
            <td>{user?.points}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles['leader']}>
        {leaders.length ? 
        <>
            <div className={styles['leader-section']}>
                <table className={styles['leader-table']}>
                    <tr>
                    <th>S No.</th>
                    <th>Name</th>
                    <th><img src='/static/images/dumpling.png'/></th>
                    </tr>
                        {displayUsers}
                </table>
            </div>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </> :
        <p>Opps!! No Leaders Found</p>
        }
      </div>
  );
}

export default LeaderSection