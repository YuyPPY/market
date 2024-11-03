import { useState, useEffect } from "react"
import { Config } from "../../config/conention";
import MarketModal from "../../components/MarkModel";


export default function Owner() {
    const api = Config.API;
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    
    useEffect(() => {
        const fetchData = () => {
            setData([{'market_id': 1,
                'market_name': 'Market E',
                'village': 'Village D',
                'district': 'District C',
                'province': 'Province I'},
               {'market_id': 2,
                'market_name': 'Market A',
                'village': 'Village J',
                'district': 'District B',
                'province': 'Province I'},
               {'market_id': 3,
                'market_name': 'Market H',
                'village': 'Village H',
                'district': 'District D',
                'province': 'Province B'},
               {'market_id': 4,
                'market_name': 'Market B',
                'village': 'Village E',
                'district': 'District E',
                'province': 'Province H'},
               {'market_id': 5,
                'market_name': 'Market G',
                'village': 'Village F',
                'district': 'District E',
                'province': 'Province C'},
               {'market_id': 6,
                'market_name': 'Market I',
                'village': 'Village A',
                'district': 'District A',
                'province': 'Province A'},
               {'market_id': 7,
                'market_name': 'Market E',
                'village': 'Village C',
                'district': 'District J',
                'province': 'Province H'},
               {'market_id': 8,
                'market_name': 'Market J',
                'village': 'Village C',
                'district': 'District B',
                'province': 'Province D'},
               {'market_id': 9,
                'market_name': 'Market H',
                'village': 'Village C',
                'district': 'District H',
                'province': 'Province A'},
               {'market_id': 10,
                'market_name': 'Market B',
                'village': 'Village H',
                'district': 'District F',
                'province': 'Province G'},
               {'market_id': 11,
                'market_name': 'Market D',
                'village': 'Village C',
                'district': 'District C',
                'province': 'Province F'},
               {'market_id': 12,
                'market_name': 'Market B',
                'village': 'Village I',
                'district': 'District D',
                'province': 'Province B'},
               {'market_id': 13,
                'market_name': 'Market A',
                'village': 'Village B',
                'district': 'District C',
                'province': 'Province B'},
               {'market_id': 14,
                'market_name': 'Market G',
                'village': 'Village H',
                'district': 'District D',
                'province': 'Province F'},
               {'market_id': 15,
                'market_name': 'Market F',
                'village': 'Village A',
                'district': 'District J',
                'province': 'Province D'},
               {'market_id': 16,
                'market_name': 'Market G',
                'village': 'Village A',
                'district': 'District D',
                'province': 'Province A'},
               {'market_id': 17,
                'market_name': 'Market B',
                'village': 'Village I',
                'district': 'District G',
                'province': 'Province I'},
               {'market_id': 18,
                'market_name': 'Market B',
                'village': 'Village H',
                'district': 'District B',
                'province': 'Province I'},
               {'market_id': 19,
                'market_name': 'Market J',
                'village': 'Village D',
                'district': 'District I',
                'province': 'Province C'},
               {'market_id': 20,
                'market_name': 'Market B',
                'village': 'Village G',
                'district': 'District J',
                'province': 'Province C'},
               {'market_id': 21,
                'market_name': 'Market C',
                'village': 'Village J',
                'district': 'District D',
                'province': 'Province G'},
               {'market_id': 22,
                'market_name': 'Market D',
                'village': 'Village B',
                'district': 'District D',
                'province': 'Province C'},
               {'market_id': 23,
                'market_name': 'Market G',
                'village': 'Village H',
                'district': 'District A',
                'province': 'Province C'},
               {'market_id': 24,
                'market_name': 'Market F',
                'village': 'Village I',
                'district': 'District B',
                'province': 'Province I'},
               {'market_id': 25,
                'market_name': 'Market J',
                'village': 'Village A',
                'district': 'District I',
                'province': 'Province H'},
               {'market_id': 26,
                'market_name': 'Market E',
                'village': 'Village F',
                'district': 'District J',
                'province': 'Province I'},
               {'market_id': 27,
                'market_name': 'Market E',
                'village': 'Village C',
                'district': 'District G',
                'province': 'Province C'},
               {'market_id': 28,
                'market_name': 'Market C',
                'village': 'Village D',
                'district': 'District D',
                'province': 'Province H'},
               {'market_id': 29,
                'market_name': 'Market E',
                'village': 'Village J',
                'district': 'District I',
                'province': 'Province H'},
               {'market_id': 30,
                'market_name': 'Market G',
                'village': 'Village D',
                'district': 'District F',
                'province': 'Province B'},
               {'market_id': 31,
                'market_name': 'Market G',
                'village': 'Village J',
                'district': 'District J',
                'province': 'Province J'},
               {'market_id': 32,
                'market_name': 'Market J',
                'village': 'Village G',
                'district': 'District A',
                'province': 'Province J'},
               {'market_id': 33,
                'market_name': 'Market A',
                'village': 'Village G',
                'district': 'District A',
                'province': 'Province C'},
               {'market_id': 34,
                'market_name': 'Market C',
                'village': 'Village J',
                'district': 'District A',
                'province': 'Province F'},
               {'market_id': 35,
                'market_name': 'Market F',
                'village': 'Village I',
                'district': 'District E',
                'province': 'Province J'},
               {'market_id': 36,
                'market_name': 'Market E',
                'village': 'Village H',
                'district': 'District G',
                'province': 'Province A'},
               {'market_id': 37,
                'market_name': 'Market B',
                'village': 'Village I',
                'district': 'District D',
                'province': 'Province F'},
               {'market_id': 38,
                'market_name': 'Market C',
                'village': 'Village A',
                'district': 'District D',
                'province': 'Province I'},
               {'market_id': 39,
                'market_name': 'Market J',
                'village': 'Village C',
                'district': 'District C',
                'province': 'Province B'},
               {'market_id': 40,
                'market_name': 'Market F',
                'village': 'Village I',
                'district': 'District J',
                'province': 'Province I'},
               {'market_id': 41,
                'market_name': 'Market B',
                'village': 'Village I',
                'district': 'District E',
                'province': 'Province C'},
               {'market_id': 42,
                'market_name': 'Market E',
                'village': 'Village B',
                'district': 'District D',
                'province': 'Province C'},
               {'market_id': 43,
                'market_name': 'Market F',
                'village': 'Village J',
                'district': 'District E',
                'province': 'Province E'},
               {'market_id': 44,
                'market_name': 'Market C',
                'village': 'Village F',
                'district': 'District I',
                'province': 'Province D'},
               {'market_id': 45,
                'market_name': 'Market A',
                'village': 'Village B',
                'district': 'District E',
                'province': 'Province J'},
               {'market_id': 46,
                'market_name': 'Market C',
                'village': 'Village B',
                'district': 'District D',
                'province': 'Province B'},
               {'market_id': 47,
                'market_name': 'Market I',
                'village': 'Village I',
                'district': 'District G',
                'province': 'Province A'},
               {'market_id': 48,
                'market_name': 'Market A',
                'village': 'Village E',
                'district': 'District D',
                'province': 'Province H'},
               {'market_id': 49,
                'market_name': 'Market H',
                'village': 'Village D',
                'district': 'District H',
                'province': 'Province I'},
               {'market_id': 50,
                'market_name': 'Market J',
                'village': 'Village A',
                'district': 'District C',
                'province': 'Province I'},
               {'market_id': 51,
                'market_name': 'Market G',
                'village': 'Village C',
                'district': 'District B',
                'province': 'Province A'},
               {'market_id': 52,
                'market_name': 'Market E',
                'village': 'Village A',
                'district': 'District F',
                'province': 'Province B'},
               {'market_id': 53,
                'market_name': 'Market H',
                'village': 'Village G',
                'district': 'District B',
                'province': 'Province F'},
               {'market_id': 54,
                'market_name': 'Market F',
                'village': 'Village A',
                'district': 'District E',
                'province': 'Province F'},
               {'market_id': 55,
                'market_name': 'Market B',
                'village': 'Village C',
                'district': 'District A',
                'province': 'Province D'},
               {'market_id': 56,
                'market_name': 'Market H',
                'village': 'Village F',
                'district': 'District D',
                'province': 'Province E'},
               {'market_id': 57,
                'market_name': 'Market H',
                'village': 'Village F',
                'district': 'District J',
                'province': 'Province A'},
               {'market_id': 58,
                'market_name': 'Market D',
                'village': 'Village J',
                'district': 'District C',
                'province': 'Province D'},
               {'market_id': 59,
                'market_name': 'Market B',
                'village': 'Village G',
                'district': 'District E',
                'province': 'Province F'},
               {'market_id': 60,
                'market_name': 'Market J',
                'village': 'Village A',
                'district': 'District D',
                'province': 'Province F'},
               {'market_id': 61,
                'market_name': 'Market B',
                'village': 'Village D',
                'district': 'District G',
                'province': 'Province C'},
               {'market_id': 62,
                'market_name': 'Market I',
                'village': 'Village F',
                'district': 'District I',
                'province': 'Province C'},
               {'market_id': 63,
                'market_name': 'Market C',
                'village': 'Village G',
                'district': 'District I',
                'province': 'Province G'},
               {'market_id': 64,
                'market_name': 'Market D',
                'village': 'Village I',
                'district': 'District C',
                'province': 'Province H'},
               {'market_id': 65,
                'market_name': 'Market D',
                'village': 'Village C',
                'district': 'District F',
                'province': 'Province E'},
               {'market_id': 66,
                'market_name': 'Market F',
                'village': 'Village I',
                'district': 'District B',
                'province': 'Province G'},
               {'market_id': 67,
                'market_name': 'Market B',
                'village': 'Village A',
                'district': 'District C',
                'province': 'Province F'},
               {'market_id': 68,
                'market_name': 'Market A',
                'village': 'Village B',
                'district': 'District J',
                'province': 'Province D'},
               {'market_id': 69,
                'market_name': 'Market F',
                'village': 'Village J',
                'district': 'District F',
                'province': 'Province F'},
               {'market_id': 70,
                'market_name': 'Market B',
                'village': 'Village C',
                'district': 'District E',
                'province': 'Province F'},
               {'market_id': 71,
                'market_name': 'Market G',
                'village': 'Village F',
                'district': 'District D',
                'province': 'Province A'},
               {'market_id': 72,
                'market_name': 'Market D',
                'village': 'Village J',
                'district': 'District H',
                'province': 'Province E'},
               {'market_id': 73,
                'market_name': 'Market H',
                'village': 'Village A',
                'district': 'District E',
                'province': 'Province I'},
               {'market_id': 74,
                'market_name': 'Market C',
                'village': 'Village G',
                'district': 'District B',
                'province': 'Province B'},
               {'market_id': 75,
                'market_name': 'Market H',
                'village': 'Village I',
                'district': 'District G',
                'province': 'Province D'},
               {'market_id': 76,
                'market_name': 'Market G',
                'village': 'Village C',
                'district': 'District B',
                'province': 'Province H'},
               {'market_id': 77,
                'market_name': 'Market G',
                'village': 'Village E',
                'district': 'District H',
                'province': 'Province B'},
               {'market_id': 78,
                'market_name': 'Market J',
                'village': 'Village G',
                'district': 'District J',
                'province': 'Province J'},
               {'market_id': 79,
                'market_name': 'Market F',
                'village': 'Village B',
                'district': 'District I',
                'province': 'Province I'},
               {'market_id': 80,
                'market_name': 'Market B',
                'village': 'Village F',
                'district': 'District C',
                'province': 'Province H'},
               {'market_id': 81,
                'market_name': 'Market C',
                'village': 'Village B',
                'district': 'District D',
                'province': 'Province B'},
               {'market_id': 82,
                'market_name': 'Market E',
                'village': 'Village A',
                'district': 'District J',
                'province': 'Province D'},
               {'market_id': 83,
                'market_name': 'Market E',
                'village': 'Village E',
                'district': 'District C',
                'province': 'Province D'},
               {'market_id': 84,
                'market_name': 'Market A',
                'village': 'Village G',
                'district': 'District B',
                'province': 'Province E'},
               {'market_id': 85,
                'market_name': 'Market G',
                'village': 'Village I',
                'district': 'District G',
                'province': 'Province D'},
               {'market_id': 86,
                'market_name': 'Market C',
                'village': 'Village E',
                'district': 'District B',
                'province': 'Province J'},
               {'market_id': 87,
                'market_name': 'Market D',
                'village': 'Village H',
                'district': 'District F',
                'province': 'Province J'},
               {'market_id': 88,
                'market_name': 'Market G',
                'village': 'Village I',
                'district': 'District I',
                'province': 'Province H'},
               {'market_id': 89,
                'market_name': 'Market B',
                'village': 'Village E',
                'district': 'District D',
                'province': 'Province G'},
               {'market_id': 90,
                'market_name': 'Market H',
                'village': 'Village D',
                'district': 'District A',
                'province': 'Province A'},
               {'market_id': 91,
                'market_name': 'Market D',
                'village': 'Village E',
                'district': 'District F',
                'province': 'Province G'},
               {'market_id': 92,
                'market_name': 'Market H',
                'village': 'Village A',
                'district': 'District A',
                'province': 'Province G'},
               {'market_id': 93,
                'market_name': 'Market A',
                'village': 'Village B',
                'district': 'District A',
                'province': 'Province F'},
               {'market_id': 94,
                'market_name': 'Market F',
                'village': 'Village A',
                'district': 'District F',
                'province': 'Province D'},
               {'market_id': 95,
                'market_name': 'Market C',
                'village': 'Village G',
                'district': 'District I',
                'province': 'Province H'},
               {'market_id': 96,
                'market_name': 'Market E',
                'village': 'Village J',
                'district': 'District B',
                'province': 'Province E'},
               {'market_id': 97,
                'market_name': 'Market H',
                'village': 'Village D',
                'district': 'District J',
                'province': 'Province E'},
               {'market_id': 98,
                'market_name': 'Market I',
                'village': 'Village E',
                'district': 'District I',
                'province': 'Province A'},
               {'market_id': 99,
                'market_name': 'Market F',
                'village': 'Village C',
                'district': 'District G',
                'province': 'Province B'},
               {'market_id': 100,
                'market_name': 'Market E',
                'village': 'Village F',
                'district': 'District E',
                'province': 'Province A'}]);
        };

        fetchData();
    }, []);

    // fetch the data 
// this fuction 
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [currentRows, setCurrentRows] = useState([]);
    useEffect(() => {
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        setCurrentRows(data.slice(indexOfFirstRow, indexOfLastRow));
    }, [data, currentPage, rowsPerPage]);

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // const [loading, setLoading] = useState(true); 
    // const [error, setError] = useState(null); 


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`${api}/api/markets`); 
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const jsonData = await response.json(); 
    //             console.log('Fetched Data:', jsonData);
    //             setData(jsonData); 
    //         } catch (err) {
    //             setError(err.message); 
    //         } finally {
    //             setLoading(false); 
    //         }
    //     };

    //     fetchData(); 
    // }, [api]); 

    // if (loading) return <div>Loading...</div>;

    // if (error) return <div>Error: {error}</div>;
    // if (data.length === 0) return <div>No data available</div>;


    return (
        <div id="content" className="app-content bg-gray-400">

            <ol className="breadcrumb float-xl-end">
                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                <li className="breadcrumb-item"><a href="#" onClick={(e) => {
                    e.preventDefault();  // Prevent page refresh
                    handleOpen();  // Open the modal
                }} className="text-blue"><i className="fas fa-plus"></i> ເພີ່ມຂໍ້ມູນ</a></li>
            </ol>
            <h1 className="page-header">ຂໍ້ມູນຂອງຕະຫຼາດ</h1>
            <div className="panel panel-inverse">

                <div className="panel-heading bg-danger">
                    <h4 className="panel-title fs-18px"> ຂໍ້ມູນຂອງຕະຫຼາດ</h4>

                </div>


                <div className="panel-body">
                    <table id="data-table-default" width="100%" className="table table-striped table-bordered align-middle text-nowrap">
                        <thead>
                            <tr>
                                <th width="1%" className="text-center">ລ/ດ</th>
                                <th className="">ຕະຫລາດ</th>
                                <th className="">ບ້ານ</th>
                                <th className="">ເມືອງ</th>
                                <th className="">ແຂວງ</th>
                                <th width="5%" className="">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentRows.map((market, index) => (
                                <tr key={market.market_id}>
                                    <td className="text-center">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                                    <td>{market.market_name}</td>
                                    <td>{market.village}</td>
                                    <td>{market.district}</td>
                                    <td>{market.province}</td>
                                    <td>oo</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                {/* Pagination Controls */}
                <div className="pagination-controls">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <MarketModal open={modalOpen} handleClose={handleClose} />
        </div>
    )
}


