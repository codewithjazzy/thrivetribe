import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Link,
    Text
} from '@chakra-ui/react';


export default function BlogCard({ title, content }){
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card maxW='lg' variant='filled' borderWidth="2px">
      <CardHeader>
        <Heading size='md' textAlign="center">{title}</Heading>   
      </CardHeader>
      <CardBody>
        <Text noOfLines={isExpanded ? null : 5}>
            {content}
        </Text>
      </CardBody>
      <CardFooter justify="flex-end">
        <Text as="i" fontSize={16}>
            <Link
                onClick={() => setIsExpanded(!isExpanded)}
                fontWeight="500"
            >
                {isExpanded ? 'Show Less' : 'Read More'}
            </Link>
        </Text>
      </CardFooter>
    </Card>
  );
}
