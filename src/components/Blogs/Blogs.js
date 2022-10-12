import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-5 p-5 text-xl sm:p-10 sm:m-10  sm:text-2xl mt-5  border bg-blue-400  border-2 rounded-lg hover:bg-green-400 border-green-300'>
                <p className='text-2xl sm:text-4xl font-bold pb-4'>How does Contest API work?</p>
                <div className='text-justify '>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;