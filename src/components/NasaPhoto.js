import React from 'react'

function NasaPhoto(props) {
  console.log(props);
  return (
    <section className="blog-posts">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-5 post-img ">
                    <img src={props ? props.url : "https://cdn.emk.dev/templates/featured-image.png"} alt="jaduuuu" />
                  </div>
                  <div className="column is-7 featured-content va">
                    <div>
                      <h1 className="title post-title">{props ? props.title : "Loading..."}</h1>
                      <p className="post-excerpt">{props ? props.explanation : "Wait..."}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default NasaPhoto;
