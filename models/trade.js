// const { DateTime } = require("luxon");
// const { v4: uuidv4 } = require('uuid');
// const categories = ['Leonardo da Vinci','Vincent van Gogh'];
// const trades = [
//     {
    //     id:'1',
    //     title:'Mona Lisa',
    //     category:'Leonardo da Vinci',
    //     year:'1503',
    //     details:'Take the Mona Lisa and transform it into digital graffiti wall art, says Queen Mona Ok. This is a simple work for Digital Collage and Graffiti Artist, RS Artist... Just keep adding graffiti. The Mona Lisa is transformed into Queen Mona Ok by layering text, chalk, and spray paint in loud, vivid colors. A graffiti crown made of blue and gold spray paint completes the appearance. Your house will exude the very essence of elegance and sophistication when printed on our substantial, long-lasting fabric. You can select your preferred size of portrait and frame to better encapsulate the entirety of this pieces energy.',
    //     price:'1,000,000',
    //     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mona_Lisa_%28copy%2C_Hermitage%29.jpg/224px-Mona_Lisa_%28copy%2C_Hermitage%29.jpg',
    //     createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    // },
    // {
    //     id:'2',
    //     title:'Last Supper',
    //     category:'Leonardo da Vinci',
    //     year:'1495',
    //     details:'Take the Last Supper and transform it into digital wall art. The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John – specifically the moment after Jesus announces that one of his apostles will betray him.Its handling of space, mastery of perspective, treatment of motion and complex display of human emotion has made it one of the Western worlds most recognizable paintings and among Leonardos most celebrated works.Some commentators consider it pivotal in inaugurating the transition into what is now termed the High Renaissance.',
    //     price:'900,000',
    //     image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/53683/73081/1596175692386_IMG_20200731_113320__54959.1597983528.jpg?c=2',
    //     createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    // },
    // {
    //     id:'3',
    //     title:'Vitruvian Man',
    //     category:'Leonardo da Vinci',
    //     year:'1490',
    //     details:'Take the Vitruvian Man and transform it into digital graffiti wall art. The drawing depicts a nude man in two superimposed positions with his arms and legs apart and inscribed in both a circle and square. Described by the art historian Carmen C. Bambach as justly ranked among the all-time iconic images of Western civilization, the work is a unique synthesis of artistic and scientific ideals and often considered an archetypal representation of the High Renaissance.',
    //     price:'800,000',
    //     image:'https://images.goodsmile.info/cgm/images/product/20160527/5700/39241/large/96a2396f8b2ce655f932fbc9e1325b7f.jpg',
    //     createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    // },
    // {
    //     id:'4',
    //     title:'Self Portrait',
    //     category:'Vincent van Gogh',
    //     year:'1889',
    //     details:'Take the Self Portrait and transform it into digital wall art. It is both more confident and more aggressive. It is a surly, almost rude and choleric face - as if the sitter had had enough of examining his features for signs of madness. There are deep creases by the nose and cheekbones, the eyebrows are thick and prominent, the corners of the mouth have turned down: it is the face of a man with no more time for friendliness. The snaking and swirling lines that denote the background are used for the person and clothing of the artist, too, and the restless rejection of harmony and tranquillity to which these lines attest sets the keynote of the subjects facial features: the need to deform and remake has created a new disorder in his physiognomy.',
    //     price:'700,000',
    //     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1620px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
    //     createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    // },
    // {
    //     id:'5',
    //     title:'The Starry Night',
    //     category:'Vincent van Gogh',
    //     year:'1889',
    //     details:'Take the Starry Night and transform it into digital wall art. Notice the brush strokes. For the sky they swirl, each dab of color rolling with the clouds around the stars and moon. On the cypress tree they bend with the curve of the branches. The whole effect is ethereal and dreamlike. The hills easily roll down into the little village below. In contrast, the town is straight up and down, done with rigid lines that interrupt the flow of the brush strokes. Tiny little trees soften the inflexibility of the town. Bringing nature into the unnaturalness of buildings. One of the biggest points of interest about this painting is that it came entirely from Van Gogh’s imagination. None of the scenery matches the area surrounding Saint-Paul or the view from his window. As a man who religiously paints what he sees, it’s a remarkable break from Van Gogh’s normal work.',
    //     price:'600,000',
    //     image:'https://www.vangoghgallery.com/img/starry_night_full.jpg',
    //     createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    // },
    // {
    //     id:'6',
    //     title:'Sunflowers',
    //     category:'Vincent van Gogh',
    //     year:'1887',
    //     details:'Take the Sunflowers and transform it into digital wall art. The fact that he had painted Sunflowers already is only revealed in the spring of 1889, when Gauguin claimed one of the Arles versions in exchange for studies he had left behind after leaving Arles for Paris. Van Gogh was upset and replied that Gauguin had absolutely no right to make this request: I am definitely keeping my sunflowers in question. He has two of them already, let that hold him. And if he is not satisfied with the exchange he has made with me, he can take back his little Martinique canvas, and his self-portrait sent to me from Brittany, at the same time giving me back both my portrait and the two sunflower canvases which he has taken to Paris. So if he ever broaches this subject again, I have told you just how matters stand.',
    //     price:'500,000',
    //     image:'https://iiif.micr.io/TZCqF/full/1280,/0/default.jpg',
    //     createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    // }
// ];
// exports.categories = () => categories;
// exports.find = () => trades;
// exports.findById = id => trades.find(trade => trade.id === id);
// exports.save = function (trade) {
//     trade.id = uuidv4();
//     trade.createdAt=DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
//     if(categories.indexOf(trade.category) === -1){
//         categories.push(trade.category);
//     }
//     trades.push(trade);
// };
// exports.updateById = function (id, newtrade) {
//     let trade = this.findById(id);
//     if(trade){
//         if(categories.indexOf(newtrade.category) === -1){
//             categories.push(newtrade.category);
//         }
//         trade.title = newtrade.title;
//         trade.category = newtrade.category;
//         trade.year = newtrade.year;
//         trade.details = newtrade.details;
//         trade.price = newtrade.price;
//         trade.image = newtrade.image;
        



//         categories.forEach(category => { 
//             if(!trades.some(trade => trade.category === category)){
//                 let categoryIndex = categories.indexOf(category);
//                 if(categoryIndex !== -1){
//                     categories.splice(categoryIndex, 1);
//                 }
//             }
//         }); 
        

//         return true;
//     }else {
//         return false;
//     }
// };
// exports.deleteById = function (id) {
//     let index = trades.findIndex(trade => trade.id === id);
//     if(index !== -1){
//         let deletedtrade = trades.splice(index,1);
//         if(!trades.some(trade => trade.category === deletedtrade[0].category)){
//             let categoryIndex = categories.indexOf(deletedtrade[0].category);
//             if(categoryIndex !== -1){
//                 categories.splice(categoryIndex, 1);
//             }
//         }
//         return true;
//     }else {
//         return false;
//     }
// };  



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    title: {type: String, required: [true, 'Title is required']},
    category: {type: String, required: [true, 'Category is required']},
    host: {type: Schema.Types.ObjectId, ref: 'User'},
    year: {type: String, required: [true, 'Year is required']},
    details: {type: String, required: [true, 'Detail is required'], 
              minLength: [10, 'The detail should have at least 10 characters']},
    price: {type: String, required: [true, 'Price is required']},
    image: {type: String, required: [true, 'Image is required']},
    status: { type: String, required: [true, 'Status is required']},
    watchlist: {type: Schema.Types.Array, ref: 'User'},
},
{timestamps: true}
);

module.exports = mongoose.model('Trade', tradeSchema);