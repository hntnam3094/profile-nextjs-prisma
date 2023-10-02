import {CircularProgress} from "@nextui-org/react";
import {Tooltip} from "@nextui-org/react";

let skillList = [
    {
        title: 'HTML',
        value: 90,
        skill: [
            'Writing semantic HTML',
            'Forms and Validations',
            'Accessibility',
            'SEO basic',
        ]
    },
    {
        title: 'CSS',
        value: 90,
        skill: [
            'Making layouts',
            'Resposive design',
        ]
    },
    {
        title: 'PHP',
        value: 90,
        skill: [
            'OOP',
            'Data types',
            'Control structures',
            'Function',
            'Class, interface',
            'Extending and implementation',
            'Type-Hint',
            'HTTP Request hanling',
            'Exceptions',
        ]
    },
    {
        title: 'JAVASCRIPTS',
        value: 90,
        skill: [
            'DOM',
            'Fetch API/Ajax',
        ]
    },
    {
        title: 'CODEIGNITER',
        value: 70,
        skill: [
            'Controller',
            'Routing',
            'Validate',
            'View/View cell/View render/View layouts',
            'Model/Entity',
            'Database migrate/Database seeding'
        ]
    },
    {
        title: 'LARAVEL',
        value: 70,
        skill: [
            'Controller',
            'Routing',
            'View',
            'Model',
            'Error handing',
            'Request',
            'Response',
            'Validate',
            'Events',
            'Mail',
            'Notification',
            'Service Provider',
            'Service Container',
        ]
    },
    {
        title: 'VUEJS',
        value: 70,
        skill: [
            'Vue life cycle',
            'Vue event bus',
            'Vuex',
            'Computed/Watch',
            'Props/Emits'
        ]
    },
    {
        title: 'REACTJS',
        value: 20,
        skill: ['Nextjs life cycle']
    },
    {
        title: 'MYSQL',
        value: 70
    },
    {
        title: 'DOCKER',
        value: 30
    },
]

export default function Skill() {
    return (
        <div className="flex items-center flex-wrap">
            {skillList.map(item => (
                <Tooltip key={item.title} content={
                    <ul>
                        <li className="font-bold">SKILL</li>
                        {
                            item.skill?.map(skill => (
                             <li key="skill">+ {skill}</li>
                            ))
                        }
                    </ul>
                }>
                    <div key={item.title} className="w-[120px] h-[120px] flex justify-center items-center">
                        <CircularProgress
                            label={item.title}
                            size="lg"
                            value={item.value}
                            color={item.value > 80 ? 'success' : item.value > 50 ? 'primary' : 'warning' }
                            showValueLabel={true}
                        />
                    </div>
                </Tooltip>
                
            ))}
        </div>
    )
}