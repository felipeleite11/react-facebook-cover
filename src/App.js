import React, { Component } from 'react'

import './App.css'
import '../node_modules/animate.css/animate.min.css'

import Header from './components/Header'
import PostList from './components/PostList'
import PostBox from './components/PostBox'

class App extends Component {
    state = {
        posts: [
            {
              id: 1,
              author: {
                name: 'Julio Alcantara',
                avatar: 'https://www.folhape.com.br/obj/1/339223,475,80,0,0,475,365,0,0,0,0.jpg'
              },
              date: '04 Jun 2019',
              content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
              likes: 14,
              dislikes: 2,
              comments: [
                {
                  id: 1,
                  author: {
                    name: 'Diego Fernandes',
                    avatar: 'http://www.recanto.df.gov.br/wp-conteudo//uploads/2015/02/CARLOS-DALVAN-1-TRATADA-e1548944757770-300x259.png'
                  },
                  content: "Conteúdo do comentário Conteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentário"
                },
                {
                  id: 2,
                  author: {
                    name: 'Pauloca',
                    avatar: 'https://image.freepik.com/fotos-gratis/perfil-de-mulher-bonita-em-oculos-de-sol-vermelhos_1304-5212.jpg'
                  },
                  content: "Conteúdo do comentário 2"
                }
              ],
            },
            {
              id: 2,
              author: {
                name: 'Sabrina Queiroz',
                avatar: 'https://cdn.pensador.com/img/imagens/sh/ut/shutterstock_92466964_0_c.jpg'
              },
              date: '04 Jun 2019',
              content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
              likes: 7,
              dislikes: 0,
              comments: [
                {
                  id: 1,
                  author: {
                    name: 'Diego Fernandes',
                    avatar: 'https://becode.com.br/wp-content/uploads/2018/07/Foto-Perfil.jpg'
                  },
                  content: "Conteúdo do comentário"
                }
              ],
            },
            {
              id: 3,
              author: {
                name: 'Julio Alcantara',
                avatar: 'https://daks2k3a4ib2z.cloudfront.net/53e10683aba9f4867d01ceeb/5499e5ee4e47521356b43d14_a.jpg'
              },
              date: '04 Jun 2019',
              content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
              likes: 27,
              dislikes: 10,
              comments: [
                {
                  id: 1,
                  author: {
                    name: 'Diego Fernandes',
                    avatar: 'https://blog.emania.com.br/content/uploads/2016/06/foto-de-perfil-acessibilidade.jpg'
                  },
                  content: "Conteúdo do comentário Conteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentárioConteúdo do comentário"
                },
                {
                  id: 2,
                  author: {
                    name: 'Pauloca',
                    avatar: 'https://uploads.metropoles.com/wp-content/uploads/2019/05/08162337/Screenshot_7356.jpg'
                  },
                  content: "Conteúdo do comentário 2"
                }
              ],
            }
        ]   
    }

    handleCreatePost = content => {
        const newPost = {
            id: this.state.posts.length + 1,
            author: {
              name: 'Felipe Leite',
              avatar: 'https://www.folhape.com.br/obj/1/339223,475,80,0,0,475,365,0,0,0,0.jpg'
            },
            date: '25 Dez 2019',
            content,
            likes: 0,
            dislikes: 0,
            comments: [],
        }

        const posts = this.state.posts
        posts.unshift(newPost)

        this.setState({
            posts
        })
    }

    render() {
        return ( 
            <>
                <Header />

                <PostBox 
                    onCreatePost={this.handleCreatePost}
                />

                <PostList 
                    posts={this.state}
                />
            </>
        )
    }
}

export default App