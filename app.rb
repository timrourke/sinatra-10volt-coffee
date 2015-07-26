require 'bundler'
Bundler.require()


blog_posts = [{
	'date' => '2015-07-01',
	'title' => 'On Foreign Markets',
	'excerpt' => 'Accordingly I searched for a hiding place and finally found one by accident, inside a huge hanging ornament which swung from the ceiling of the hall, and about ten feet from the floor. Into the capacious bowl-like vase I sprang with ease, and scarcely had I settled down within it than I heard a number of people enter the apartment. The group stopped beneath my hiding place and I could plainly overhear their every word.',
	'author' => 'Kevin MacDonald'
	},{
	'date' => '2015-06-28',
	'title' => 'We have acquired the Ramsey Group',
	'excerpt' => 'Just how I was to help Perry I could scarce imagine, but I hoped that some fortuitous circumstance might solve the problem for me. It was quite evident however that little less than a miracle could aid me, for what could I accomplish in this strange world, naked and unarmed? It was even doubtful that I could retrace my steps to Phutra should I once pass beyond view of the plain, and even were that possible, what aid could I bring to Perry no matter how far I wandered?',
	'author' => 'Abdul Hakim Mohammed'
	},{
	'date' => '2015-06-20',
	'title' => 'Material prices at all time low',
	'excerpt' => 'Passepartout made it a point, as he made his purchases, to take a good look at the city. It was formerly defended by a noble fort, which has since become a state prison; its commerce has dwindled away, and Passepartout in vain looked about him for such a bazaar as he used to frequent in Regent Street.',
	'author' => 'Julie M. Kent'
	},{
	'date' => '2015-06-04',
	'title' => 'Structural deficits',
	'excerpt' => 'When he got into the full swing of babbling to himself, it slowly purged itself into pure English. The sentences grew longer and were enunciated with a rhythm and ease that was reminiscent of the lecture platform.',
	'author' => 'Kevin MacDonald'
	},{
	'date' => '2015-05-28',
	'title' => 'Growth in Brazil and Japan',
	'excerpt' => 'Scarce had I touched the earth than I was upon my feet, dashing madly for the path by which I had entered this horrible valley. A glance over my shoulder showed me the sithic engaged in pawing at the spear stuck through his lower jaw, and so busily engaged did he remain in this occupation that I had gained the safety of the cliff top before he was ready to take up the pursuit. When he did not discover me in sight within the valley he dashed, hissing into the rank vegetation of the swamp and that was the last I saw of him.',
	'author' => 'Julie M. Kent'
	},{
	'date' => '2015-07-01',
	'title' => 'Bridge building in Kenya',
	'excerpt' => 'Entreaties, cuffs, and kicks could not drive them back, so at their own instance they were put down in the ship\'s run for salvation. Still, no sign of mutiny reappeared among the rest. On the contrary, it seemed, that mainly at Steelkilt\'s instigation, they had resolved to maintain the strictest peacefulness, obey all orders to the last, and, when the ship reached port, desert her in a body.',
	'author' => 'Abdul Hakim Mohammed'
	}]

portfolio_posts = [{
	'title' => 'Kinser Bridge',
	'excerpt' => 'Scarce had I touched the earth than I was upon my feet, dashing madly for the path by which I had entered this horrible valley. A glance over my shoulder showed me the sithic engaged in pawing at the spear stuck through his lower jaw, and so busily engaged did he remain in this occupation that I had gained the safety of the cliff top before he was ready to take up the pursuit. When he did not discover me in sight within the valley he dashed.',
	'involvement' => 'Structural engineering',
	'location' => 'Sydney, Australia',
	'image_url' => 'sydney'
	},{
	'title' => 'Hirimoto Tower',
	'excerpt' => 'Accordingly I searched for a hiding place and finally found one by accident, inside a huge hanging ornament which swung from the ceiling of the hall, and about ten feet from the floor. Into the capacious bowl-like vase I sprang with ease, and scarcely had I settled down within it than I heard a number of people enter the apartment. The group stopped beneath my hiding place and I could plainly overhear their every word.',
	'involvement' => 'Structural engineering and construction',
	'location' => 'Tokyo, Japan',
	'image_url' => 'tokyo'
	},{
	'title' => 'Halliburton Court',
	'excerpt' => 'Just how I was to help Perry I could scarce imagine, but I hoped that some fortuitous circumstance might solve the problem for me. It was quite evident however that little less than a miracle could aid me, for what could I accomplish in this strange world, naked and unarmed? It was even doubtful that I could retrace my steps to Phutra should I once pass beyond view of the plain, and even were that possible, what aid could I bring to Perry no matter how far I wandered?',
	'involvement' => 'Structural engineering, project management',
	'location' => 'Dallas, Texas',
	'image_url' => 'dallas'
	},{
	'title' => '600 Wacker',
	'excerpt' => 'Passepartout made it a point, as he made his purchases, to take a good look at the city. It was formerly defended by a noble fort, which has since become a state prison; its commerce has dwindled away, and Passepartout in vain looked about him for such a bazaar as he used to frequent in Regent Street.',
	'involvement' => 'Structural engineering and rehabilitation',
	'location' => 'Chicago, Illinois',
	'image_url' => 'chicago'
	},{
	'title' => 'Khayr Center',
	'excerpt' => 'When he got into the full swing of babbling to himself, it slowly purged itself into pure English. The sentences grew longer and were enunciated with a rhythm and ease that was reminiscent of the lecture platform.',
	'involvement' => 'Architectural design and construction',
	'location' => 'Dubai, United Arab Emirates',
	'image_url' => 'dubai'
	},{
	'title' => 'Slate Commons',
	'excerpt' => 'Entreaties, cuffs, and kicks could not drive them back, so at their own instance they were put down in the ship\'s run for salvation. Still, no sign of mutiny reappeared among the rest. On the contrary, it seemed, that mainly at Steelkilt\'s instigation, they had resolved to maintain the strictest peacefulness, obey all orders to the last, and, when the ship reached port, desert her in a body.',
	'involvement' => 'Construction and property management',
	'location' => 'Chicago, Illinois',
	'image_url' => 'condo'
	}]

get '/' do 
	erb :index, :locals => {:active => 'home'}
end

get '/about' do 
	erb :about, :locals => {:active => 'about'}
end

get '/blog' do 
	erb :blog, :locals => {:active => 'blog', :blog_posts => blog_posts}
end

get '/portfolio' do 
	erb :portfolio, :locals => {:active => 'portfolio', :portfolio_posts => portfolio_posts}
end