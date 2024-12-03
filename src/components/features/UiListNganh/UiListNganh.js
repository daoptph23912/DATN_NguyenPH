import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from 'antd';
import PropsContext from 'src/routes/context';
import "./index.scss";

export const UiListNganh = () => {
    const { translate, dispatch } = useContext(PropsContext);
    const [size, setSize] = useState(15);
    const [total, setTotal] = useState(0);
    const [data, setData] = useState([]);
    const [indexpage, setIndexPage] = useState(1);

    useEffect(() => {
        const mockData = Array.from({ length: 50 }, (_, index) => ({
            subject: `Tên môn học`,
            students: `Số sinh viên`,
            teacher: `Giáo viên`,
            startDate: `2023-09-${String(4 + index).padStart(2, '0')}`,
            endDate: `2023-09-${String(10).padStart(2, '0')}`,
            openAt: `Mở lúc`,
        }));
        setData(mockData);
        setTotal(mockData.length);
    }, []);

    const handleChangePage = (page, pageSize) => {
        setIndexPage(page);
        setSize(pageSize);
    };
    const paginatedData = data.slice((indexpage - 1) * size, indexpage * size);
    return (
        <div className="UiMachineList-CSS">
            <div className="table-container">
                <table className="table border-table">
                    <thead className="style-table-title">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên môn học</th>
                            <th scope="col">Số sinh viên</th>
                            <th scope="col">Giáo viên</th>
                            <th scope="col">Ngày bắt đầu</th>
                            <th scope="col">Ngày kết thúc</th>
                            <th scope="col">Mở lúc</th>
                        </tr>
                    </thead>
                    <tbody className="style-table-row">
                        {Array.isArray(paginatedData) ? paginatedData.map((value, index) => (
                            <tr key={index}>
                                <th className="style-table-row">{(indexpage - 1) * size + index + 1}</th>
                                <td className="style-table-row">{value.subject}</td>
                                <td className="style-table-row">{value.students}</td>
                                <td className="style-table-row">{value.teacher}</td>
                                <td className="style-table-row">{value.startDate}</td>
                                <td className="style-table-row">{value.endDate}</td>
                                <td className="style-table-row">{value.openAt}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="7" className="text-center">No data available in table</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {total > size && (
                <div className='d-flex' style={{ padding: 30 }}>
                    <div className='col'></div>
                    <Pagination
                        pageSizeOptions={['15', '30', '45', '60']}
                        pageSize={size}
                        current={indexpage}
                        onChange={handleChangePage}
                        total={total}
                    />
                </div>
            )}
        </div>
    );

}
