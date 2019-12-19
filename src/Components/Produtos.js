import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

class Produtos extends Component{
    render(){
        const {match} = this.props
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <h3>Categorias</h3>
                        <Link to='/produtos/categoria/1'>Categoria 1</Link>
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