import { Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'

const ImageModal = ({ src, alt, ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }
    
    return (
        <>
            <Image 
                alt={alt} 
                src={src} 
                borderRadius="lg"
                cursor="pointer"
                onClick={onOpen}
                {...props}
            />
            <Modal 
                isOpen={isOpen} 
                onClose={onClose} 
                size="full"
                isCentered
                lockScroll={false}
                returnFocusOnClose={false}
                useInert={false}
            >
                <ModalOverlay onClick={handleOverlayClick} />
                <ModalContent 
                    bg="rgba(0, 0, 0, 0.8)" 
                    onClick={handleOverlayClick}
                    boxShadow="none"
                    maxW="100vw"
                    m={0}
                >
                    <ModalCloseButton color="white" zIndex={2} />
                    <ModalBody 
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center" 
                        p={4}
                        onClick={handleOverlayClick}
                    >
                        <Image 
                            alt={alt} 
                            src={src} 
                            maxH="90vh"
                            objectFit="contain"
                            borderRadius="lg"
                            style={{ pointerEvents: 'none' }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ImageModal 