const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDescription = document.querySelector('.product-description');
const DescriptionImage = document.querySelector('.infoProduct')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAside);
DescriptionImage.addEventListener('click', toggleProductDescription);

function toggleDesktopMenu(){
    // declarando un nombre para saber si el carrito está cerrado
    const isAsideClosed = aside.classList.contains('inactive');
    const isDescriptionClose = productDescription.classList.contains('inactive');
    // Condicional para que cierre aside para abrir desktopmenu

    if(!isAsideClosed | !isDescriptionClose){
        aside.classList.add('inactive')
        productDescription.classList.add('inactive');
    }
    //una vez cerrado abre el carrito

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    // declarando un nombre para saber si el carrito está cerrado
    const isAsideClosed = aside.classList.contains('inactive');
    const isDescriptionClose = productDescription.classList.contains('inactive');
    
    // Condicional para que cierre aside para abrir menú

    if(!isAsideClosed | !isDescriptionClose){
        aside.classList.add('inactive');
        productDescription.classList.add('inactive');
    }
    //una vez cerrado el carrito, abre menú
    
    mobileMenu.classList.toggle('inactive');
}

function toggleAside(){
    // declarando un nombre para saber si el menumobile está cerrado
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = menuEmail.classList.contains('inactive');
    const isDescriptionClosed = productDescription.classList.contains('inactive');
    
    // Condicional para que cierre menuMobile o DesktopMenu para abrir aside

    if(!isMobileMenuClosed| !isDesktopMenuClosed | !isDescriptionClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDescription.classList.add('inactive');
    }
    //una vez cerrado abre el carrito
    aside.classList.toggle('inactive');

  
}

function toggleProductDescription(){
    // declarando un nombre para saber si el menumobile está cerrado
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = menuEmail.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    
    // Condicional para que cierre menuMobile o DesktopMenu para abrir aside

    if(!isMobileMenuClosed| !isDesktopMenuClosed | !isAsideClosed){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        aside.classList.add('inactive')
    }
    //una vez cerrado abre el carrito
    productDescription.classList.toggle('inactive');
    
  
}

const productList = [];

// constantes de las imagenes de los productos

const BikeImg = '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/bike.jpeg'
const BasketImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/canasta.jpeg';
const SwingImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/columpio.jpeg';
const HouseImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/casa_manta.jpg';
const CCushionImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/cojines.jpeg';
const GCushionImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/cojines2.jpeg';
const WFornitureImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/mueble.jpeg';
const ChairImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/silla.jpeg';
const ArmChairImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/sillon_madera.jpeg';
const GardenCImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/sillones_jardin.jpeg';
const SofaImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/sofa.jpeg';
const WTableWareImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/vajilla.jpeg';
const BTableWareImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/vajilla_azul.jpeg';
const CoffeMImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/cafetera.jpeg';
const VasesImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/jarrones.jpeg';
const TrayImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/bandeja.jpeg';
const BureauImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/buro.jpeg';
const QuiltImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/colcha nino.jpeg';
const DTableImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/comedor.jpeg';
const TableImg= '/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/img_products/mesa.jpeg';

 
// Llenando la lista de productos

    productList.push({
        name: 'Bike',
        price: 120,
        image: BikeImg ,
    });
    productList.push({
        name: 'PicnicBasket',
        price: 80,
        image: BasketImg ,
    });
    productList.push({
        name: 'Swing',
        price: 150,
        image: SwingImg ,
    });
    productList.push({
        name: 'BlanketHouse',
        price: 90,
        image: HouseImg ,
    });
    productList.push({
        name: 'ColorfulCushions',
        price: 40,
        image: CCushionImg ,
    });
    productList.push({
        name: 'Gray Cushions',
        price: 40,
        image: GCushionImg ,
    });
    productList.push({
        name: 'Wooden Forniture',
        price: 200,
        image: WFornitureImg ,
    });
    productList.push({
        name: 'Chair',
        price: 120,
        image: ChairImg ,
    });
    productList.push({
        name: 'Arm Chair',
        price: 140,
        image: ArmChairImg ,
    });
    productList.push({
        name: 'GardenChair',
        price: 200,
        image: GardenCImg ,
    });
    productList.push({
        name: 'Sofa',
        price: 220,
        image: SofaImg ,
    });
    productList.push({
        name: 'White Tablewere',
        price: 100,
        image: WTableWareImg ,
    });
    productList.push({
        name: 'Blue Tablewere',
        price: 100,
        image: BTableWareImg,
    });
    productList.push({
        name: 'Coffe Maker',
        price: 50,
        image: CoffeMImg ,
    });
    productList.push({
        name: 'Vases',
        price: 80,
        image: VasesImg ,
    });
    productList.push({
        name: 'Tray',
        price: 70,
        image: TrayImg ,
    });
    productList.push({
        name: 'Bureau',
        price: 110,
        image: BureauImg ,
    });
    productList.push({
        name: 'Quilt',
        price: 100,
        image: QuiltImg ,
    });
    productList.push({
        name: 'Dining Table',
        price: 170,
        image: DTableImg ,
    });
    productList.push({
        name: 'Table',
        price: 120,
        image: TableImg ,
    });


// Creando la estructura de html para cada producto
for (product of productList){

    const ProductCard = document.createElement('div');
    ProductCard.classList.add('product-card');

    const ProductImg= document.createElement('img');
    ProductImg.setAttribute('src', product.image);

    const ProductInfo = document.createElement('div');
    ProductInfo.classList.add('product-info');
    

    const ProductInfoDiv = document.createElement('div');

    const ProductPrice = document.createElement('p');
    ProductPrice.innerText= '$' + product.price;
    const ProductName = document.createElement('p');
    ProductName.innerText = product.name;
    ProductInfoDiv.appendChild(ProductPrice);
    ProductInfoDiv.appendChild(ProductName);

    const ProductInfoFigure = document.createElement('figure');
    const ProductImgCart = document.createElement('img');
    ProductImgCart.setAttribute('src','/Proyect-Online-Store/Maquetación Tienda/Pag_inicio/logos/bt_add_to_cart.svg');
    
    ProductInfoFigure.appendChild(ProductImgCart);

    ProductInfo.appendChild(ProductInfoDiv);
    ProductInfo.appendChild(ProductInfoFigure);

    ProductCard.appendChild(ProductImg);
    ProductCard.appendChild(ProductInfo);
    cardsContainer.appendChild(ProductCard);
}       