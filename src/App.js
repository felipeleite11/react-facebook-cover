import React, { Component } from 'react'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

import './App.css'
import '../node_modules/animate.css/animate.min.css'

import Header from './components/Header'
import PostList from './components/PostList'
import PostBox from './components/PostBox'

import profile from './assets/profile.jpg'

class App extends Component {
    state = {
        //Usuário autenticado
        user: {
          id: 1,
          name: 'Felipe Leite',
          avatar: profile
        },
        currentPostId: 3,
        posts: [
            {
              id: 1,
              author: {
                name: 'Julio Alcantara',
                avatar: 'https://www.folhape.com.br/obj/1/339223,475,80,0,0,475,365,0,0,0,0.jpg'
              },
              date: '04 Jun 2019',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet.',
              likes: getRandomInt(0, 50),
              dislikes: getRandomInt(0, 50),
              comments: [
                {
                  id: 1,
                  author: {
                    name: 'Diego Fernandes',
                    avatar: 'http://www.recanto.df.gov.br/wp-conteudo//uploads/2015/02/CARLOS-DALVAN-1-TRATADA-e1548944757770-300x259.png'
                  },
                  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet."
                },
                {
                  id: 2,
                  author: {
                    name: 'Pauloca',
                    avatar: 'https://image.freepik.com/fotos-gratis/perfil-de-mulher-bonita-em-oculos-de-sol-vermelhos_1304-5212.jpg'
                  },
                  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet."
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
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet.',
              likes: getRandomInt(0, 50),
              dislikes: getRandomInt(0, 50),
              comments: [
                {
                  id: 1,
                  author: {
                    name: 'Diego Fernandes',
                    avatar: 'https://becode.com.br/wp-content/uploads/2018/07/Foto-Perfil.jpg'
                  },
                  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet."
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
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet.',
              likes: getRandomInt(0, 50),
              dislikes: getRandomInt(0, 50),
              comments: [
                {
                  id: 1,
                  author: {
                    name: 'Diego Fernandes',
                    avatar: 'https://blog.emania.com.br/content/uploads/2016/06/foto-de-perfil-acessibilidade.jpg'
                  },
                  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet."
                },
                {
                  id: 2,
                  author: {
                    name: 'Pauloca',
                    avatar: 'https://uploads.metropoles.com/wp-content/uploads/2019/05/08162337/Screenshot_7356.jpg'
                  },
                  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante nisl, tincidunt id mattis quis, sagittis et orci. Phasellus lobortis posuere nunc, et consequat nibh posuere a. Etiam interdum lorem nisl. Nulla eu leo rutrum felis mattis condimentum quis ac risus. In aliquam egestas enim, in bibendum eros. Morbi ut nulla laoreet, pulvinar augue sit amet, ullamcorper leo. Praesent dui odio, ultrices vulputate nisl vel, mollis placerat leo. Praesent non massa ut lectus bibendum dapibus quis vitae arcu. Nam eleifend faucibus aliquet."
                }
              ],
            }
        ]   
    }

    handleCreatePost = content => {
        const newPost = {
            id: this.state.currentPostId + 1,
            author: {
              name: this.state.user.name,
              avatar: this.state.user.avatar
            },
            date: format(
              new Date(), 
              'dd MMM yyyy', 
              { locale: pt }
            ),
            content,
            likes: 0,
            dislikes: 0,
            comments: [],
        }

        this.setState({
            posts: [newPost].concat(this.state.posts),
            currentPostId: this.state.currentPostId + 1 
        })
    }
    
    handleRemove = id => {
        this.setState({
            posts: this.state.posts.filter(p => p.id !== id)
        })
    }

    handleLike = id => {
        const likedPost = this.state.posts.find(p => p.id === id)
        likedPost.likes++
        this.setState({})
    }

    handleDislike = id => {
        const dislikedPost = this.state.posts.find(p => p.id === id)
        dislikedPost.dislikes++
        this.setState({})
    }

    render() {
        return ( 
            <>
                <Header />

                <PostBox 
                    onCreatePost={this.handleCreatePost}
                />

                <PostList 
                    data={this.state}
                    onRemove={this.handleRemove}
                    onLike={this.handleLike}
                    onDislike={this.handleDislike}
                />
            </>
        )
    }
}

export default App


function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}