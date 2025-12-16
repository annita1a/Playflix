import React, { Fragment, memo, useEffect } from 'react'

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'
import { useTranslation } from 'next-i18next';

const SidebarBreadcrumb = memo(({ type }: { type: any }) => {
    const { t } = useTranslation("common");
    const dispatch = useDispatch()
    useEffect(() => {
        switch (type) {
            case 'left':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPages.left_sidebar')}` }))
                break;
            case 'right':
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPages.right_sidebar')}` }))
                break;
            default:
                dispatch(set_breadcrumb({ show: true, name: `${t('streamPages.right_sidebar')}` }))
                break;
        }
        return () => {
            dispatch(set_breadcrumb({ show: false, name: '' }))
        }
    }, [type])
    return (
        <Fragment>
        </Fragment>
    )
})

SidebarBreadcrumb.displayName = "SidebarBreadcrumb"
export default SidebarBreadcrumb