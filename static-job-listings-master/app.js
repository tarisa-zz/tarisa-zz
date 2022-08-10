window.onload = 
    function loadJson() { 
    fetch('data.json')
    .then(res => res.json())
    .then(data => content(data))
    .catch((error) => {
        console.error(error);
        })
    }
function content (data){

    for(let each of data){
        if ('content' in document.createElement('template')) {

            const container = document.querySelector(".container");
            const job = document.querySelector('#newJobs');
            const clone = job.content.cloneNode(true);

            const logo = clone.querySelector('.logo');
            logo.src = each.logo;

            const company = clone.querySelector('.company');
            company.innerText = each.company;

            let isnewtrue = each.new;
            if(isnewtrue === true){
                const isnew = clone.querySelector('.new');
                isnew.innerText = 'NEW!';
                isnew.classList.remove('hide');
            }

            let isfeaturedtrue = each.featured;
            if(isfeaturedtrue === true){
                const isfeatured = clone.querySelector('.featured');
                isfeatured.innerText = 'FEATURED!';
                isfeatured.classList.remove('hide');
                const jobSection = clone.querySelector('.jobs');
                jobSection.classList.add('isfeatured');
            }


            const position = clone.querySelector('.position');
            position.innerText = each.position;
            const postedAt = clone.querySelector('.postedAt');
            postedAt.innerText = each.postedAt;
            const contract = clone.querySelector('.contract');
            contract.innerText = each.contract;
            const location = clone.querySelector('.location');
            location.innerText = each.location;
            const role = clone.querySelector('.role');
            role.innerText = each.role;
            const level = clone.querySelector('.level');
            level.innerText = each.level;

            const filters = clone.querySelector('.filtersOri');

            function newButton(button){
                const newButton = document.createElement('button');
                newButton.innerText = button;
                filters.appendChild(newButton);
            }

            let language = each.languages;
            for(let lang of language){
                newButton(lang);
            }

            let tools = each.tools;
            for(let tool of tools){
                newButton(tool);
            }
            // filters

            // clicking filters
            const filtersB = clone.querySelectorAll('button');
            filtersB.forEach(filter => {
                filter.addEventListener('click', (e)=>{
                    
                    // insert filter to filter container
                    const filterContainer = document.querySelector('#filtered');
                    filterContainer.classList.remove('hide');
                    const filtered = document.querySelector('#filterItems');
                    // duplicating
                    const clone2 = filter.cloneNode(true);
                    filtered.appendChild(clone2);
                    clone2.className = '';
                    clone2.classList.add('filters');
                    const img = document.createElement('img');
                    const newClose = clone2.appendChild(img);
                    newClose.src = 'images/icon-remove.svg';

                    // filtering content 
                    const newFilterC = filter.innerText;
                    const jobs = document.querySelectorAll('.jobs');
                    
                        jobs.forEach(jobcontent =>{
                            const filteredBCont = jobcontent.querySelectorAll('button');

                            if(!jobcontent.textContent.includes(newFilterC)){
                                jobcontent.classList.add('hide');
                                filter.classList.add('disableB');
                                
                            }
                            // disable similar filter
                            filteredBCont.forEach(each =>{
                            if(each.textContent.includes(newFilterC)){
                                each.classList.add('disableB');
                            }
                            })

                            // removing each filter
                        
                        clone2.addEventListener('click', ()=>{
                        clone2.remove();
                        jobcontent.classList.remove('hide');
                        filter.classList.remove('disableB');
                        filteredBCont.forEach(each =>{
                            if(each.textContent.includes(newFilterC)){
                                each.classList.remove('disableB');
                            }
                            })
                        })
    
                        // clearing the filter 
                        const clearfilter = document.querySelector('#clearFilter');
                        const filterb = filtered.querySelector('button').innerText;
                        console.log(filterb);
                        clearfilter.addEventListener('click', ()=>{
                        filterContainer.classList.add('hide');
                        clone2.remove();
                        filter.classList.remove('disableB');
                            jobcontent.classList.remove('hide');
                            filteredBCont.forEach(each =>{
                                if(each.textContent.includes(newFilterC)){
                                    each.classList.remove('disableB');
                                }
                                })
                        })                 
                        })
                })
  
            });
            container.appendChild(clone);

    }
    }
}