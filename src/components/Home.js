import React from 'react'
import * as ReactDOM from 'react-dom';
import Test from './Video/Sea.mp4'
import { Carousel ,Card,Container,Button} from 'react-bootstrap';
import './Style.css'
export default function Home() {
 

  return (
    <div>
      <Carousel className='Carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mspoweruser.com/wp-content/uploads/2020/05/ocean-day-1.jpg"
          alt="First slide"
          height= {"500px"}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp1930867.jpg"
          alt="Second slide"
          height= {"500px"}
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.scuba.com/blog/wp-content/uploads/2020/04/shutterstock_295429772.jpg"
          alt="Third slide"
          height= {"500px"}
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
      <video loop autoPlay muted  className='Video'>

        <source         
          src={Test} type="video/mp4"/> 

      </video>

      <Container className='con'>
<section class="light">
	<div class="container py-2">
		
		<article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://images2.alphacoders.com/659/thumb-1920-659833.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">'White Shark</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">The great white shark (Carcharodon carcharias), also known as the white shark, white pointer, or simply great white, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. It is notable for its size, with larger female individuals growing to 6.1 m (20 ft) in length and 1,905–2,268 kg (4,200–5,000 lb) in weight at maturity.[3][4][5] However, most are smaller; males measure 3.4 to 4.0 m (11 to 13 ft), and females measure 4.6 to 4.9 m (15 to 16 ft) on average.[4][6] According to a 2014 study, the lifespan of great white sharks is estimated to be as long as 70 years or more, well above previous estimates,[7] making it one of the longest lived cartilaginous fishes currently known.[8] According to the same study, male great white sharks take 26 years to reach sexual maturity, while the females take 33 years to be ready to produce offspring.[9] Great white sharks can swim at speeds of 25 km/hr (16 mph)[10] for short bursts and to depths of 1,200 m (3,900 ft).[11]</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>6.1 meter</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>2,268 kg</li>
					<li class="tag__item play blue">
						<a href="#"><i class="fas fa-play mr-2"></i>30 years</a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard light red">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://images7.alphacoders.com/341/thumb-1920-341672.jpg" alt="Image Title" />	
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title red"><a href="#">Dolphin</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">A dolphin is an aquatic mammal within the infraorder Cetacea. Dolphin species belong to the families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins), Iniidae (the New World river dolphins), Pontoporiidae (the brackish dolphins), and the extinct Lipotidae (baiji or Chinese river dolphin). There are 40 extant species named as dolphins.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>1.2-9.5 meter</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>40kg-10tons</li>
					<li class="tag__item play red">
						<a href="#"><i class="fas fa-play mr-2"></i>At least 25 years </a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard light green">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://www.sqorebda3.com/vb/attachments/25560/" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title green"><a href="#">  Octopus </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Octopuses are ocean creatures that are most famous for having eight arms and bulbous heads. Some other fun facts: They have three hearts and blue blood; they squirt ink to deter predators; and being boneless, they can squeeze into (or out of) tight spaces. They are quite intelligent and have been observed using tools.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>30.5-91.4 CM</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>3-10kg</li>
					<li class="tag__item play green">
						<a href="#"><i class="fas fa-play mr-2"></i>3-5 years</a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard light yellow">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVsbHlmaXNofGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title yellow"><a href="#">Jellyfish </a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria. Jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles, although a few are anchored to the seabed by stalks rather than being mobile. The bell can pulsate to provide propulsion for highly efficient locomotion. The tentacles are armed with stinging cells and may be used to capture prey and defend against predators. Jellyfish have a complex life cycle; the medusa is normally the sexual phase, which produces planula larvae that disperse widely and enter a sedentary polyp phase before reaching sexual maturity.</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>1-40 CM</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>200 kg</li>
					<li class="tag__item play yellow">
						<a href="#"><i class="fas fa-play mr-2"></i>1-3 years</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</section>
    

      
 
    

</Container>



    </div>
  )
}
