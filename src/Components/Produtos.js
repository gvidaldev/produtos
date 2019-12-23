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
        this.handleNewCategoria = this.handleNewCategoria.bind(this)
        this.loadCategorias = this.loadCategorias.bind(this)
        this.renderCategoria = this.renderCategoria.bind(this)
    }
    loadCategorias(){
        axios
            .get('http://localhost:3001/categorias')
            .then(res => {
                this.setState({
                    categorias: res.data
                })
            })
    }
    componentDidMount(){
        this.loadCategorias() 
    }
    removeCategoria(categoria){
        axios
            .delete('http://localhost:3001/categorias/'+categoria.id)
            .then((res) => this.loadCategorias())
    }
    renderCategoria(cat){
        return (
            <li className='list-group-item' key={cat.id}>
                <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
                <button className='btn btn-danger' onClick={()=>this.removeCategoria(cat)}>
                    <span className='glyphicon glyphicon-remove'></span>
                </button>
            </li>
        )
    }
    handleNewCategoria(key){
        if(key.keyCode === 13){
            axios
                .post('http://localhost:3001/categorias',
                {
                    categoria: this.refs.categoria.value
                })
                .then(res => {
                    this.refs.categoria.value = ''
                    this.loadCategorias()
                })                
        }
    }
    render(){
        const {match} = this.props
        const { categorias } = this.state 
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <h3>Categorias</h3>
                        <ul className='list-group'>
                            {categorias.map(this.renderCategoria)}
                        </ul>
                        <div className='well well-sm'>
                            <input 
                                className='form-control'
                                onKeyUp={this.handleNewCategoria}
                                type='text' 
                                ref='categoria' 
                                placeholder='Nova Categoria' 
                            />
                        </div>
    
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