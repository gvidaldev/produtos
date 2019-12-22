import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

class Produtos extends Component{
    constructor(props){
        super(props)
        this.state={
            categorias: []
        }
    }
    componentDidMount(){
        axios
            .get('http://localhost:3001/categorias')
            .then(res => {
                this.setState({
                    categorias: res.data
                })
            })
    }
    renderCategoria(cat){
        return (
            <li key={cat.id}>
                <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
            </li>
        )
    }
    render(){
        const {match} = this.props
        const { categorias } = this.state 
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <h3>Categorias</h3>
                        <ul>
                            {categorias.map(this.renderCategoria)}
                        </ul>
    
                    </div>
                
                    <div className='col-sm-10'>
                        <h1>Produtos</h1>
                        <Route exact path={match.url} component={ProdutosHome} />
                        <Route path={match.url+'/categoria/:catId'} component={Categoria} />
                    </div>
                </div>
            </div>
        )    

    }
}

export default Produtos