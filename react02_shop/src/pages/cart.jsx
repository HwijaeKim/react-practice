import { React, useState, memo, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeAge } from '../store/userSlice';
import { plusCount, deleteCart } from '../store';
// MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


function Cart() {

    let name = useSelector((state) => state.user);
    let cart = useSelector((state) => state.cart);
    let dispatch = useDispatch();

    return (
        <div className="cart">
            {name.name} {name.age}의 장바구니
            <button onClick={() => {dispatch(changeAge(100))}}>버튼</button>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>상품명</TableCell>
                    <TableCell>수량</TableCell>
                    <TableCell>변경하기</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {cart.map((row, i) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {i+1}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>
                        <Button variant="outlined" onClick={() => {
                            dispatch(plusCount(row.id));
                            console.log(row.id);
                        }}>+</Button>
                        <Button variant="outlined" onClick={() => {
                            dispatch(deleteCart(row.id));
                        }}>삭제</Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default Cart;