import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

class Produtos extends Component{
    constructor(props){
        super(props)

        this.renderCategoria = this.renderCategoria.bind(this)
        this.handleNewCategoria = this.handleNewCategoria.bind(this)
        
    }

    componentDidMount(){
        this.props.loadCategorias() 
    }

    renderCategoria(cat){
        return (
            <li className='list-group-item' key={cat.id}>
                <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
                <button className='btn btn-danger' onClick={()=>this.props.removeCategoria(cat)}>
                    <span className='glyphicon glyphicon-remove'></span>
                </button>
            </li>
        )
    }
    handleNewCategoria(key){
        if(key.keyCode === 13){
            this.props.createCategoria({
                categoria: this.refs.categoria.value
            })
            this.refs.categoria.value = ''               
        }
    }
    render(){
        const {match, categorias} = this.props

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